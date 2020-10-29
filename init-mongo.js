db.createUser(
  {
    user: "caffeines",
    pwd: "pass2ord",
    roles: [
      {
        role: "admin",
        db: "application"
      }
    ]
  }
)