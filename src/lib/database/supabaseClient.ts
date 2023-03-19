import { createClient } from '@supabase/supabase-js';
import { env } from '$env/dynamic/private';

export const supabase = createClient(
	env.NEXT_PUBLIC_SUPABASE_URL,
	env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);
