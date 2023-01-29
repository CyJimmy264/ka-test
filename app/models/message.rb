class Message < ApplicationRecord
  belongs_to :room
  belongs_to :user

  broadcasts_to :room
  after_create_commit -> {
    broadcast_append_to(
      :messages,
      target: 'toast_container',
      partial: 'messages/message_toast'
    )
  }
end
