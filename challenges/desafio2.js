db.produtos.find({}, { _id: 0, nome: 1, vendidos: 1 }).sort({ veendidos: 1 });