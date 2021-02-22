var jseditor = require('../../jseditor.js');

var loadNodeSubtreeByUUID = jseditor.loadNodeSubtreeByUUID;
var loadNodeByUUID = jseditor.loadNodeByUUID;
var getCache = jseditor.getCache;
var addToCache = jseditor.addToCache;
var clearCache = jseditor.clearCache;

describe('function loadNodeSubtreeByUUID(uuid)', () => {
    beforeEach(() => {
        clearCache();
    });

    describe('uuid in cache', () => {
        it('should return node from cache[uuid]', () => {
            let uuid = getStartNode();
            let node = loadNodeByUUID(uuid);
            expect(node).to.not.be.null;
            addToCache($.parseJSON(node));
            expect(getCache()).to.have.property(uuid);
            
            let loadedNode = loadNodeSubtreeByUUID(uuid);

            let cache = getCache();

            expect(loadedNode).to.deep.equal(cache[uuid]);
        });
    });

    describe('uuid not in cache', () => {
        it('when node with such uuid exists\nshould return this node & should add this node to cache', () => {
            let uuid = getStartNode();
            let node = $.parseJSON(loadNodeByUUID(uuid));    //object
            expect(node).to.not.be.null;

            expect(getCache()).to.not.have.property(uuid);

            let loadedNode = loadNodeSubtreeByUUID(uuid);

            let cache = getCache();

            expect(cache).to.have.property(uuid);
            expect(cache[uuid]).to.deep.equal(loadedNode);
        });

        it('should return `undefined` when node with such uuid doesn`t exist', () => {
            expect(getCache()).to.not.have.property('foo');

            loadedNode = loadNodeSubtreeByUUID('foo');

            let cache = getCache();

            expect(loadedNode).to.be.undefined;
            expect(cache).to.not.have.property('foo');
        });
    })
});