


var map = L.map("map").setView([43.128333, -77.628333], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);






L.marker([43.128333, -77.628333])
    
    .addTo(map)
    .bindTooltip("<strong>University of Rochester</strong><br>The University of Rochester is a private research university in Rochester, New York, United States.");
    




