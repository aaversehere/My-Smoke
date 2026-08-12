import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mpqsgipxsoowqlmnwgai.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wcXNnaXB4c29vd3FsbW53Z2FpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY1MTMzMjcsImV4cCI6MjEwMjA4OTMyN30.fcltlT_XW1q71QrwOxeZRgrlef_Y9fxL-OzDWWB3U9c';

export const supabase = createClient(supabaseUrl, supabaseKey);
