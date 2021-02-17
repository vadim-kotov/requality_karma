const testsContext = require.context(".", true, /jseditor\.test$/);

testsContext.keys().forEach(testsContext);