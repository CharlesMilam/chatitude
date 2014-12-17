require 'sinatra'
require 'sinatra/reloader'
require 'pry-byebug'
#require 'rack-flash'

require_relative 'lib/chatitude-server.rb'
require_relative "lib/repos/users-repo.rb"

#class ChatitudeServer::Server < Sinatra::Application
  configure do
    #enable :sessions
    #use Rack::Flash
  end

  get '/' do
    send_file 'public/index.html'
  end

  post "/signup" do
    user = params[:username]
    password = params[:password]
    puts "sginup", user, password
    db = ChatitudeServer.create_db_connection("chatitude")
    ChatitudeServer::UsersRepo.save_new_user db, {name: user, password: password} 
  end

#end