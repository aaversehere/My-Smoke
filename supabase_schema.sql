-- ==========================================
-- SUPABASE SCHEMA FOR SMOKEFREE QUEST
-- ==========================================

-- Drop existing tables if they exist to avoid 'relation already exists' errors
DROP TABLE IF EXISTS public.action_plans CASCADE;
DROP TABLE IF EXISTS public.quest_results CASCADE;
DROP TABLE IF EXISTS public.users CASCADE;

-- 1. Table: users
-- Menyimpan data profil dasar responden/pemain
CREATE TABLE public.users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    respondent_number SERIAL NOT NULL UNIQUE,
    total_xp INTEGER DEFAULT 0,
    current_level INTEGER DEFAULT 1,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Table: quest_results
-- Menyimpan hasil dari Assessment (36 soal) dan Self-Efficacy (12 soal) serta metriknya
CREATE TABLE public.quest_results (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
    
    -- Menyimpan semua jawaban dalam format JSON (misal: {"1": 4, "2": 3, ...})
    answers JSONB NOT NULL DEFAULT '{}'::jsonb,
    
    -- Hasil Kalkulasi Metrik Snapshot
    coping_strength TEXT,
    confidence_level TEXT,
    
    -- Skor per domain (PCSC)
    support_seeking_score INTEGER,
    reflective_coping_score INTEGER,
    strategic_coping_score INTEGER,
    proactive_coping_score INTEGER,
    avoidance_coping_score INTEGER,
    preventive_coping_score INTEGER,
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Table: action_plans
-- Menyimpan pilihan Triggers dan Coping Toolkit dari layar Action Plan
CREATE TABLE public.action_plans (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
    
    selected_triggers TEXT[] DEFAULT '{}', -- Array of string
    selected_toolkit TEXT[] DEFAULT '{}',  -- Array of string
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);


-- ==========================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==========================================
-- Agar frontend bisa melakukan Insert/Select data (Public / Anon Access)
-- Catatan: Jika nanti menggunakan sistem Login, kebijakan (policy) ini perlu disesuaikan dengan auth.uid()

ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quest_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.action_plans ENABLE ROW LEVEL SECURITY;

-- Allow anonymous read/write untuk tahap pengembangan (Development Mode)
CREATE POLICY "Enable read access for all users" ON public.users FOR SELECT USING (true);
CREATE POLICY "Enable insert for all users" ON public.users FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update for all users" ON public.users FOR UPDATE USING (true);

CREATE POLICY "Enable read access for all users" ON public.quest_results FOR SELECT USING (true);
CREATE POLICY "Enable insert for all users" ON public.quest_results FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable read access for all users" ON public.action_plans FOR SELECT USING (true);
CREATE POLICY "Enable insert for all users" ON public.action_plans FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update for all users" ON public.action_plans FOR UPDATE USING (true);
