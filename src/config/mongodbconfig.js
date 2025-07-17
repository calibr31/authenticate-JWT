const { connect } = require("mongoose");

async function connectToDB() {
  try {
    await connect(process.env.DB_URI);
    console.log("✅ MongoDB connected...");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  }
}

module.exports = {
  connectToDB,
};
