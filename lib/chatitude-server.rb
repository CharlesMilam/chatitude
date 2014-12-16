require "pg"

require_relative "chatitude_server/lib/repos/messages-repo.rb"
require_relative "chatitude_server/lib/repos/users-repo.rb"

module ChatitudeServer
  # create db connection
  def self.create_db_connection(dbname)
    PG.connect(dbname: dbname)
  end

  # clear all data from tables
  def self.clear_db(db)
    sql = %Q[
      delete from messages;
      delete from users;
    ]
    db.exec(sql)
  end

  # create neeeded tables
  def self.create_tables(db)
    sql = %Q[
      create table if not exist users(
        id serial primary key,
        name varchar,
        password varchar,
      );
      create table if not exist messages(
        id serial primary key,
        user_id references users(id)
        on delete cascade
        on update cascade,
        message varchar,
        time_stamp timestamptz
      )
    ]
  end

  # seed the database
  def self.seed_db(db)
    sql = %Q[
    insert into users
    (name, password)
    values ('nascimeiento', '123');
    ]  
    db.exec(db)
  end

  # drop all database tables
  def self.drop_tables(db)
    sql = %Q[
      drop table messages;
      drop table users;
    ]
    db.exec(sql)
  end
  
end