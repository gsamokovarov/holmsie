task :env do
  Dir.chdir 'addon-sdk' do
    system 'exec $SHELL --init-file bin/activate'
  end
end

task :build do
  Dir.chdir 'build' do
    system 'cfx xpi'
  end
end

task :run do
  system 'cfx run'
end
