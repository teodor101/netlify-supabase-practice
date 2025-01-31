document.getElementById('fetchData').addEventListener('click', async () => {
    const response = await fetch('https://ksydiftcnlhhqsaibyod.supabase.co', {
        headers: {
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzeWRpZnRjbmxoaHFzYWlieW9kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgzMTEzMDQsImV4cCI6MjA1Mzg4NzMwNH0.uSzI66T7Y90FtPjVj_6dtSLM4Q3ilgXh2vR0_seeBuM',
            'Authorization': 'Bearer your-supabase-api-key'
        }
    });

    const data = await response.json();
    const container = document.getElementById('dataContainer');
    container.innerHTML = JSON.stringify(data, null, 2);
});
