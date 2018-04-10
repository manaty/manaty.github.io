$(function(){
    /*EXPERT LIST PARTIAL */
        $(".service-icons-container .icon").hover(
          function() {
            $(".service-icons-container .icon[data-title!='"+  $(this).data('title') +"']").removeClass('active')
            $(".service-icons-container .icon[data-title='"+  $(this).data('title') +"']").addClass('active')
            
            $(".service-icons-container[data-title='"+  $(this).data('title') +"']").addClass('active')
            $(".service-icons-container[data-title!='"+  $(this).data('title') +"']").removeClass('active')
    
            $('#service-competencies-title').html( $(this).data('title') )
            $('#service-competencies-description').html( $(this).data('description') )
            $(".service-icons-description-container").addClass('active')
    
          }, function() {
    
          }
        );
    })