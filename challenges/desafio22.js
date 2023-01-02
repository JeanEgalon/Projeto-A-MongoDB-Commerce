use("commerce");
db.produtos.updateMany(
  {},
  {
    $set: {
      vendasPorDia: [0, 0, 0, 0, 0, 0, 0],
    },
  },
);

db.produtos.updateOne(
  { nome: "Big Mac" },
  {
    $set: {
      "vendasPorDia.3": 60,
    },
  },
);

db.produtos.find({});
