db.produtos.updateMany(
  {},
  {
    $pull: {
      ingredientes: {
        $in: ["cebola"],
      },
    },
  }
);

db.produtos.find(
  {},
  {
    _id: false,
    nome: true,
    ingredientes: true,
  }
);
