module.exports = function (plop) {
    plop.setGenerator('Component', {
      description: 'React Component',
      prompts: [{
        type: 'input',
        name: 'name',
        message: 'Component name please?'
      }],
      actions: [{
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/Component/Component.hbs'
      }, {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/Component/styles.ts'
      }]
    });
  
    plop.setGenerator('Page', {
      description: 'React Page',
      prompts: [ {
        type: 'input',
        name: 'name',
        message: 'Page name please?'
      }],
      actions: [{
        type: 'add',
        path: '../src/pages/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/Page/Page.hbs'
      }, {
        type: 'add',
        path: '../src/pages/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/Page/styles.ts'
      }]
    });

    plop.setGenerator('Context', {
      description: 'React Context',
      prompts: [ {
        type: 'input',
        name: 'name',
        message: 'Context name please?'
      }],
      actions: [{
        type: 'add',
        path: '../src/context/{{pascalCase name}}.tsx',
        templateFile: 'templates/Context/Context.hbs'
      }]
    });
};