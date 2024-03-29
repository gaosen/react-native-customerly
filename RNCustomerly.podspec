
Pod::Spec.new do |s|
  s.name         = "RNCustomerly"
  s.version      = "1.0.0"
  s.summary      = "RNCustomerly"
  s.description  = <<-DESC
                  RNCustomerly
                   DESC
  s.homepage     = "https://github.com/gaosen/react-native-customerly"
  s.license      = "MIT"
  # s.license      = { :type => "MIT", :file => "FILE_LICENSE" }
  s.author             = { "author" => "author@domain.cn" }
  s.platform     = :ios, "9.0"
  s.source       = { :git => "https://github.com/gaosen/react-native-customerly.git", :tag => "master" }
  # s.source_files  = "RNCustomerly/**/*.{h,m}"
  s.requires_arc = true
  s.static_framework = true

  s.dependency 'React'
  s.dependency 'CustomerlySDK'
  s.ios.xcconfig = {
    'FRAMEWORK_SEARCH_PATHS' => '"${PODS_ROOT}/CustomerlySDK/CustomerlySDK"'
  }

  s.source_files    = 'ios/**/*.{h,m}'
  # s.source_files  = "RNCustomerly/**/*.{h,m}"
  s.exclude_files       = 'android/**/*'
  #s.dependency "others"

end

  