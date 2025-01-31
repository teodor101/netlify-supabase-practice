document.getElementById('fetchData').addEventListener('click', async () => {
    const response = await fetch('https://your-supabase-url.supabase.co/rest/v1/example_table', {
        headers: {
            'apikey': 'your-supabase-api-key',
            'Authorization': 'Bearer your-supabase-api-key'
        }
    });

    const data = await response.json();
    const container = document.getElementById('dataContainer');
    container.innerHTML = JSON.stringify(data, null, 2);
});
