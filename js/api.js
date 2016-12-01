var prod       = window.location.hostname != 'localhost';

base = prod ? 'http://yafo.herokuapp.com/api' : 'http://localhost:9090/api'