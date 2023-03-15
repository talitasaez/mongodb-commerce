db.produtos.updateMany({ nome: { $nin: ["Big Mac", "Quarteirão com Queijo"] } },
{ $push: { ingredientes: "bacon" } });

db.produtos.find({}, { nome: 1, ingredientes: 1, _id: 0 });