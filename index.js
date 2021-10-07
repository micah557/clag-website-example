function changeP() {
    document.getElementById("par-two").style.marginLeft="200px";
    }
    function hidePic() {
    document.getElementById("dog3").style.visibility="hidden";
    }
    function showPic() {
        document.getElementById('dog3').style.visibility="visible";
    }
    function changeBorder() {
        document.getElementsByClassName("dog");
        listofElement[0].style.border="2px solid red";
        listofElement[1].style.border="5px solid blue";
    }
    function popAlert() {
        alert("Hello There");
      }
         function popConfirm() {
            var choice = confirm("Do you want to remove tree?");
            if(choice == true) {
              document.getElementById("tree").style.display="none";
            } else {
              document.getElementById("tree").style.display="block";
            }
        }
        $(function() {
            $(".my-button").click(function(){
              $("#tree").toggle();  
            });
        })
