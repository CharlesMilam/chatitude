module ChatitudeServer
  class UsersRepo

    def self.save_new_user(db, userinfo)
      sql = %q[INSERT INTO users (name, password) VALUES ($1, $2);]
      result = db.exec(sql, [userinfo[:name], userinfo[:password]])
      result.entries
    end

    def self.login_user(db, userinfo)
      # create api token
      sql = %q[UPDATE users SET token = $1 WHERE name = $1 AND password = $2]
      result  = db.exec(sql, [userinfo[:name], userinfo[:password]])
      result.entries
    end

  end
end