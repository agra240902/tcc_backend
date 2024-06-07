var dbConn = require("./db");

var Reservasi = function (reservasi) {
    this.name = reservasi.name;
    this.alamat = reservasi.alamat;
    this.nohp = reservasi.nohp;
};

Reservasi.create = function (newReservasi, result) {
    dbConn.query(
        'INSERT INTO reservasi (name, alamat, nohp) VALUES (?,?,?)',
        [
            newReservasi.name,
            newReservasi.alamat,
            newReservasi.nohp,
        ],
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                console.log(res.insertId);
                result(null, res.insertId);
            }
        }
    );
};

Reservasi.findAll = function (result) {
    dbConn.query(
        'SELECT * FROM reservasi',
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                console.log(res);
                result(null, res);
            }
        }
    );
};

Reservasi.findById = function (id, result) {
    dbConn.query(
        'SELECT * FROM reservasi WHERE id = ?', id,
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                console.log(res);
                result(null, res);
            }
        }
    );
};

Reservasi.update = function (id, reservasi, result) {
    dbConn.query(
        'UPDATE reservasi SET name = ?, alamat = ?, nohp = ? WHERE id = ?', 
        [reservasi.name, reservasi.alamat, reservasi.nohp, id],
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                console.log(res);
                result(null, res);
            }
        }
    );
};

Reservasi.delete = function (id, result) {
    dbConn.query(
        'DELETE FROM reservasi WHERE id = ?', id,
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                console.log(res);
                result(null, res);
            }
        }
    );
};

module.exports = Reservasi;
