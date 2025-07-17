if (!process.env.ACCESS_TOKEN_SECRET || !process.env.REFRESH_TOKEN_SECRET || !process.env.PORT || !process.env.DB_URI) {
  console.log("ACCESS_TOKEN_SECRET or REFRESH_TOKEN_SECRET or  PORT or DB_URI dont set in .env file");
  process.exit(1)
}