import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://oeicsuevbqsgiuvnykqe.supabase.co';
const supabaseAnonToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9laWNzdWV2YnFzZ2l1dm55a3FlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE4ODAwNzAsImV4cCI6MTk3NzQ1NjA3MH0.hMS9T0VFcGfRUF9ChLqfUp3TEykaZVonGdPD5ukb8Is';

export default createClient(supabaseUrl, supabaseAnonToken);
