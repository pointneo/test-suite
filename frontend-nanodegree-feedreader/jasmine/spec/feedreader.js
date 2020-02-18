//self invoked function with all test suites
 
$(function() {
   //rss feeds suite
    describe('RSS Feeds', function() {
         // This is our first test - it tests to make sure that the
         // allFeeds variable has been defined and that it is not
         //  empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        //loops through each feed in the allFeeds object and ensures it has a URL defined and its not empty
         it('has url', function(){
            for (feed of allFeeds)
            {
                expect(feed.hasOwnProperty('url')).toBe(true)
                expect(feed.url).not.toBe('')
            }
         })

        //test if the feeds opjects have name
          it('has name', function(){
            for (feed of allFeeds)
            {
                expect(feed.hasOwnProperty('name')).toBe(true)
                expect(feed.name).not.toBe('')
            }
         })
    });

    //test suite for the menue
    let defualtIs=document.body.classList.contains('menu-hidden')
   let  menuIcon =document.querySelector('.menu-icon-link')
   //test if the menue is hidden by default
     describe('The menue', function(){
          it('default is hidden', function(){
            expect(defualtIs).toBe(true)
          })
          menuIcon.click()
          it('it changed', function(){
            
            expect(document.body.classList.contains('menu-hidden')).toBe(false)
               menuIcon.click()
              expect(document.body.classList.contains('menu-hidden')).toBe(true)

          })
    })

   

    //test suite for intial entries
    describe('Initial Entries', function(){
        //because its asynchronos
        beforeEach(function(done){
            loadFeed(1,done)
        })
        it('has entries', function(){
            //test if the .feed has content
            expect(document.querySelector('.feed').childNodes.length).toBeGreaterThan(0)
        })
    })

let firstChild, secondChild
//suite for new feed selection
describe('New Feed Selection',function(){
    beforeEach(function(done){
        //test if the feed is changing the content
        loadFeed(1,function(){
             firstChild = document.querySelector('.feed').childNodes[0]
        })
        loadFeed(1,function(){
             secondChild = document.querySelector('.feed').childNodes[0]
            done()
        })

    })
    it('content changes', function(){
        expect(firstChild).not.toBe(secondChild)
    })
})
    
}());
