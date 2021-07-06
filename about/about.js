$(function(){
	var milestones = $('.milestone');
	var cards = $('.milestone-card-container').find('.milestone-card');
	milestones.click(function(){
		var t = $(this),
				ind = t.index(),
				matchedCard = cards.eq(ind);
		
		t.add(matchedCard).addClass('active');
		milestones.not(t).add(cards.not(matchedCard)).removeClass('active');
	});
});