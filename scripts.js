document.addEventListener('DOMContentLoaded', function() {
    fetch('https://raw.githubusercontent.com/sirlegrau/parrilla/a04ae8c968a2ef80494cce201b5dfa4929d9cb92/programacion.json')
        .then(response => response.json())
        .then(data => {
            const scheduleDiv = document.getElementById('schedule');

            for (const moment in data) {
                const momentData = data[moment];
                
                const momentTitle = document.createElement('div');
                momentTitle.className = 'moment-title';
                momentTitle.textContent = moment;

                const descriptionDiv = document.createElement('div');
                descriptionDiv.className = 'moment-description';
                descriptionDiv.textContent = momentData.description;
                
                momentTitle.appendChild(descriptionDiv);
                scheduleDiv.appendChild(momentTitle);

                const table = document.createElement('table');
                const tbody = document.createElement('tbody');

                for (const time in momentData) {
                    if (time !== 'description') {
                        const row = document.createElement('tr');

                        const timeCell = document.createElement('td');
                        timeCell.textContent = time;
                        row.appendChild(timeCell);

                        const programCell = document.createElement('td');
                        programCell.textContent = momentData[time];
                        row.appendChild(programCell);

                        tbody.appendChild(row);
                    }
                }

                table.appendChild(tbody);
                scheduleDiv.appendChild(table);
            }
        })
        .catch(error => console.error('Error al cargar la programación:', error));
});
