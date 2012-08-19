class << Dir
  def exists?(path)
    File.exists? path
  end
end unless Dir.respond_to? :exists?

task :env do
  Dir.chdir 'addon-sdk' do
    system 'bin/activate'
  end
end

task :build => :env do
  Dir.mkdir 'build' unless Dir.exists? 'build'
  Dir.chdir 'build' do
    system 'cfx xpi'
  end
end

task :test => :env do
  system 'cfx --verbose test'
end

task :run => :env do
  system 'cfx run'
end

task :default => :run