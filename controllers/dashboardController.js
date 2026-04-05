const Record = require("../models/Record");

exports.getSummary = async (req, res) => {
  const income = await Record.aggregate([
    { $match: { type: "income" } },
    { $group: { _id: null, total: { $sum: "$amount" } } },
  ]);

  const expense = await Record.aggregate([
    { $match: { type: "expense" } },
    { $group: { _id: null, total: { $sum: "$amount" } } },
  ]);

  const totalIncome = income[0]?.total || 0;
  const totalExpense = expense[0]?.total || 0;

  res.json({
    totalIncome,
    totalExpense,
    netBalance: totalIncome - totalExpense,
  });
};

exports.getCategorySummary = async (req, res) => {
  try {
    const summary = await Record.aggregate([
      {
        $group: {
          _id: "$category",
          total: { $sum: "$amount" }
        }
      }
    ]);

    res.json(summary);
  } catch (error) {
    res.status(500).json({ message: "Error getting category summary" });
  }
};

exports.getRecentActivity = async (req, res) => {
  try {
    const records = await Record.find()
      .sort({ date: -1 })
      .limit(5);

    res.json(records);
  } catch (error) {
    res.status(500).json({ message: "Error fetching recent activity" });
  }
};