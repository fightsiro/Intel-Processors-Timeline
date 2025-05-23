// ������ ����� ������������
document.addEventListener('DOMContentLoaded', () => {
    const data = {
        labels: ['1978 (8086)', '1993 (Pentium)', '2008 (Core i7)', '2021 (Alder Lake)'],
        datasets: [{
            label: '����� ������������',
            data: [29000, 3100000, 731000000, 10000000000],
            borderColor: '#0071C5',
            backgroundColor: 'rgba(0, 113, 197, 0.2)',
            tension: 0.4
        }]
    };

    const ctx = document.getElementById('transistorsChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            scales: {
                y: {
                    type: 'logarithmic',
                    title: { display: true, text: '����������� (��������������� �����)' }
                }
            }
        }
    });
});