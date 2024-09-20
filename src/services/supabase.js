import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://foeulvnevjnlxaqsfzew.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZvZXVsdm5ldmpubHhhcXNmemV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY2NjA5MjYsImV4cCI6MjA0MjIzNjkyNn0.u47apAMM94ang5_ui8a8cWGVVmSAmJUDtwLRsebEMnE";
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;