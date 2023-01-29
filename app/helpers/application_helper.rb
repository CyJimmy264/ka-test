module ApplicationHelper
  def notification_classes(type)
    case type
    when 'alert'
      'alert alert-danger'
    when 'notice'
      'alert alert-info'
    end
  end
end
