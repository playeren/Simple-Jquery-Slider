// ***************************************************************************
// Yes, I know. It's very simple. Rudimentary, even. It can't do anything    *
// except load images, and show them one-after-another using Jquery.fadeIn.  *
// But I made it. And now I'm sharing it. Use it. John MHM {freshnode}       *
// ***************************************************************************

$(function () {

    var slides = new Array();
        slides[0] = '/img/slide01.png';  //Change these into the paths for your imgs.
        slides[1] = '/img/slide02.png';
        slides[2] = '/img/slide03.png'; 
      //slides[n] = '/img/slideN.png';   //Yes, you can use more than 3 images. Amazing! I know! 

    var howMany = $(slides).length;

    var isBottom = false;

    if(howMany>0) 
    {
        LoadSlide(0,howMany);
    }

       function LoadSlide(index,howMany)
        {
            if(index<howMany)
                {
                    var el0 = $("#bottom");  //change this into the first element-id you want to load the imgs into
                    var el1 = $("#top");    //change this into the second element-id you want to load imgs into
                    var img = new Image();
                    $(img).load(function () {
                        $(this).css('display','none');
                        if(isBottom == true)
                        { 
                            $(el1).html(this);
                            $(el1).css('z-index', '3'); //If you use z-index for other elements nearby, you might need to adjust these. 
                            $(el0).css('z-index', '2'); //Just make sure the order is the same, and you make a mirror change to the else below.
                            // console.log("pong");     //Don't ask
                        } else {
                            $(el0).html(this);
                            $(el1).css('z-index', '2');
                            $(el0).css('z-index', '3'); 
                            // console.log("ping");     //I said; DON'T ASK!         
                        }

                        isBottom = !isBottom;
                      
                        $(this).fadeIn(1000,function()  //You don't have to use fadeIn, and you can of change the transition speed (1000ms) to something that suits you better.
                            {
                                function nextSlide () 
                                    {                                                                      
                                        LoadSlide(index+1,howMany);
                                    };
                                setTimeout(nextSlide, 5000); //Change the 5000ms to a lower number to go faster and vice versa.
                            });

                    }).error(function () {             
                        LoadSlide(index+1,howMany);
                    }).attr('src', slides[index]); 
                    
                } else {
                    LoadSlide(0,howMany)
                }
        }

});