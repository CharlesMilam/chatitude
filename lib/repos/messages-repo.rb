module ChatitudeServer
  class MessagesRepo

    def self.recent(db)
      sql = %q[SELECT * FROM messages ORDER BY time_stamp ASC LIMIT 10;]
      result = db.exec(sql)
      result.entries
    end

  end
end