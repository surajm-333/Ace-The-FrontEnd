(function() {
  $('.dashboard-nav__item').on('click', function(e) {
    var itemId;
    e.preventDefault();
    $('.dashboard-nav__item').removeClass('dashboard-nav__item--selected');
    $(this).addClass('dashboard-nav__item--selected');
    itemId = $(this).children().attr('href');
    $('.dashboard-content__panel').hide();
    $('.dashboard-content__panel[data-panel-id=' + itemId + ']').show();
    if (itemId === 'my_trip') {
      $('.dashboard-preview').show();
    } else {
      $('.dashboard-preview').hide();
    }
    return console.log(itemId);
  });

  $('.dashboard-list__item').on('click', function(e) {
    var itemId;
    e.preventDefault();
    $('.dashboard-list__item').removeClass('dashboard-list__item--active');
    $(this).addClass('dashboard-list__item--active');
    itemId = $(this).attr('data-item-id');
    $('.dashboard-preview__panel').hide();
    $('.dashboard-preview__panel[data-panel-id=' + itemId + ']').show();
    return console.log(itemId);
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxDQUFBLENBQUUsc0JBQUYsQ0FBeUIsQ0FBQyxFQUExQixDQUE2QixPQUE3QixFQUFzQyxRQUFBLENBQUMsQ0FBRCxDQUFBO0FBQ3RDLFFBQUE7SUFBRSxDQUFDLENBQUMsY0FBRixDQUFBO0lBRUEsQ0FBQSxDQUFFLHNCQUFGLENBQXlCLENBQUMsV0FBMUIsQ0FBc0MsK0JBQXRDO0lBQ0EsQ0FBQSxDQUFFLElBQUYsQ0FBTyxDQUFDLFFBQVIsQ0FBaUIsK0JBQWpCO0lBRUEsTUFBQSxHQUFTLENBQUEsQ0FBRSxJQUFGLENBQU8sQ0FBQyxRQUFSLENBQUEsQ0FBa0IsQ0FBQyxJQUFuQixDQUF3QixNQUF4QjtJQUVULENBQUEsQ0FBRSwyQkFBRixDQUE4QixDQUFDLElBQS9CLENBQUE7SUFDQSxDQUFBLENBQUUsMENBQUEsR0FBNkMsTUFBN0MsR0FBc0QsR0FBeEQsQ0FBNEQsQ0FBQyxJQUE3RCxDQUFBO0lBRUEsSUFBRyxNQUFBLEtBQVUsU0FBYjtNQUNFLENBQUEsQ0FBRSxvQkFBRixDQUF1QixDQUFDLElBQXhCLENBQUEsRUFERjtLQUFBLE1BQUE7TUFHRSxDQUFBLENBQUUsb0JBQUYsQ0FBdUIsQ0FBQyxJQUF4QixDQUFBLEVBSEY7O1dBS0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSxNQUFaO0VBaEJvQyxDQUF0Qzs7RUFrQkEsQ0FBQSxDQUFFLHVCQUFGLENBQTBCLENBQUMsRUFBM0IsQ0FBOEIsT0FBOUIsRUFBdUMsUUFBQSxDQUFDLENBQUQsQ0FBQTtBQUN2QyxRQUFBO0lBQUUsQ0FBQyxDQUFDLGNBQUYsQ0FBQTtJQUVBLENBQUEsQ0FBRSx1QkFBRixDQUEwQixDQUFDLFdBQTNCLENBQXVDLDhCQUF2QztJQUNBLENBQUEsQ0FBRSxJQUFGLENBQU8sQ0FBQyxRQUFSLENBQWlCLDhCQUFqQjtJQUVBLE1BQUEsR0FBUyxDQUFBLENBQUUsSUFBRixDQUFPLENBQUMsSUFBUixDQUFhLGNBQWI7SUFFVCxDQUFBLENBQUUsMkJBQUYsQ0FBOEIsQ0FBQyxJQUEvQixDQUFBO0lBQ0EsQ0FBQSxDQUFFLDBDQUFBLEdBQTZDLE1BQTdDLEdBQXNELEdBQXhELENBQTRELENBQUMsSUFBN0QsQ0FBQTtXQUVBLE9BQU8sQ0FBQyxHQUFSLENBQVksTUFBWjtFQVhxQyxDQUF2QztBQWxCQSIsInNvdXJjZXNDb250ZW50IjpbIiQoJy5kYXNoYm9hcmQtbmF2X19pdGVtJykub24gJ2NsaWNrJywgKGUpIC0+XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBcbiAgJCgnLmRhc2hib2FyZC1uYXZfX2l0ZW0nKS5yZW1vdmVDbGFzcyAnZGFzaGJvYXJkLW5hdl9faXRlbS0tc2VsZWN0ZWQnXG4gICQodGhpcykuYWRkQ2xhc3MgJ2Rhc2hib2FyZC1uYXZfX2l0ZW0tLXNlbGVjdGVkJ1xuICBcbiAgaXRlbUlkID0gJCh0aGlzKS5jaGlsZHJlbigpLmF0dHIgJ2hyZWYnXG4gICAgXG4gICQoJy5kYXNoYm9hcmQtY29udGVudF9fcGFuZWwnKS5oaWRlKClcbiAgJCgnLmRhc2hib2FyZC1jb250ZW50X19wYW5lbFtkYXRhLXBhbmVsLWlkPScgKyBpdGVtSWQgKyAnXScpLnNob3coKVxuICBcbiAgaWYgaXRlbUlkID09ICdteV90cmlwJ1xuICAgICQoJy5kYXNoYm9hcmQtcHJldmlldycpLnNob3coKVxuICBlbHNlXG4gICAgJCgnLmRhc2hib2FyZC1wcmV2aWV3JykuaGlkZSgpXG4gIFxuICBjb25zb2xlLmxvZyhpdGVtSWQpXG4gIFxuJCgnLmRhc2hib2FyZC1saXN0X19pdGVtJykub24gJ2NsaWNrJywgKGUpIC0+XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBcbiAgJCgnLmRhc2hib2FyZC1saXN0X19pdGVtJykucmVtb3ZlQ2xhc3MgJ2Rhc2hib2FyZC1saXN0X19pdGVtLS1hY3RpdmUnXG4gICQodGhpcykuYWRkQ2xhc3MgJ2Rhc2hib2FyZC1saXN0X19pdGVtLS1hY3RpdmUnXG4gIFxuICBpdGVtSWQgPSAkKHRoaXMpLmF0dHIgJ2RhdGEtaXRlbS1pZCdcbiAgXG4gICQoJy5kYXNoYm9hcmQtcHJldmlld19fcGFuZWwnKS5oaWRlKClcbiAgJCgnLmRhc2hib2FyZC1wcmV2aWV3X19wYW5lbFtkYXRhLXBhbmVsLWlkPScgKyBpdGVtSWQgKyAnXScpLnNob3coKVxuICBcbiAgY29uc29sZS5sb2coaXRlbUlkKSJdfQ==
//# sourceURL=coffeescript