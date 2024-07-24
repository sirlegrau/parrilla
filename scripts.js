document.addEventListener('DOMContentLoaded', function() {
    fetch('https://raw.githubusercontent.com/sirlegrau/parrilla/main/programacion.json')
        .then(response => response.json())
        .then(data => {
            const scheduleDiv = document.getElementById('schedule');

            for (const day in data) {
                const dayData = data[day];
                
                const dayColumn = document.createElement('div');
                dayColumn.className = 'day-column';

                const dayTitle = document.createElement('div');
                dayTitle.className = 'day-title';
                dayTitle.textContent = day;
                dayColumn.appendChild(dayTitle);

                for (const moment in dayData) {
                    const momentData = dayData[moment];
                    
                    const momentTitle = document.createElement('div');
                    momentTitle.className = 'moment-title';
                    momentTitle.textContent = moment;

                    const descriptionDiv = document.createElement('div');
                    descriptionDiv.className = 'moment-description';
                    descriptionDiv.textContent = momentData.description;
                    
                    momentTitle.appendChild(descriptionDiv);
                    dayColumn.appendChild(momentTitle);

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
                    dayColumn.appendChild(table);
                }

                scheduleDiv.appendChild(dayColumn);
            }
        })
        .catch(error => console.error('Error al cargar la programación:', error));
});
