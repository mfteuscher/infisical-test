if (process.env.SECRET_ONE) {
  console.log("Secret found!");
  process.exit(0);
}

console.log("Unable to find secret");
process.exit(1);
