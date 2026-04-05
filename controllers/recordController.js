const Record = require("../models/Record");

exports.createRecord = async (req, res) => {
  const record = await Record.create({
    ...req.body,
    createdBy: req.user.id,
  });

  res.json(record);
};

exports.getRecords = async (req, res) => {
  const records = await Record.find();
  res.json(records);
};

exports.updateRecord = async (req, res) => {
  const record = await Record.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(record);
};

exports.deleteRecord = async (req, res) => {
  await Record.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};

exports.filterRecords = async (req, res) => {
  const { type, category } = req.query;

  const records = await Record.find({
    type,
    category,
  });

  res.json(records);
};