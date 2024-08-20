// Some data to make the trick

const categories = [
  {
    id: 1,
    name: "Science-Fiction",
  },
  {
    id: 2,
    name: "Comédie",
  },
];

// Action pour obtenir la liste des catégories
const browseCategories = (req, res) => {
  res.json(categories);
};

// Action pour obtenir une catégorie spécifique par ID
const readCategory = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const category = categories.find((cat) => cat.id === id);

  if (category) {
    res.json(category);
  } else {
    res.status(404).json({ message: "Category not found" });
  }
};

// Exporter les actions pour pouvoir les utiliser ailleurs
module.exports = {
  browseCategories,
  readCategory,
};
