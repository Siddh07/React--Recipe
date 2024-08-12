import {createClient} from '@supabase/supabase-js'

const supabaseUrl = 'https://jxodnwnkxrdnxbvdqsrf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4b2Rud25reHJkbnhidmRxc3JmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM0Nzc3NzMsImV4cCI6MjAzOTA1Mzc3M30.BMFiKhTB7nWqjVaBBuCjMmomPSCi1yq74AK-U8lZ1lg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey)