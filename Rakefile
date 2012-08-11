task :env do
  Dir.chdir 'addon-sdk' do
    system 'exec $SHELL --init-file bin/activate'
  end
end

task :build do
  Dir.mkdir 'build' unless Dir.exists? 'build'
  Dir.chdir 'build' do
    system 'cfx xpi'
  end
end

task :test do
  system 'cfx --verbose test'
end

task :run do
  system 'cfx run'
end
