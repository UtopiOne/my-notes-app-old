import { supabase } from '$lib/database/supabaseClient';

import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	return {
		notes: await supabase.from('notes').select()
	};
}) satisfies PageServerLoad;
