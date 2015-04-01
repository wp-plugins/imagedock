function setChosen(element){
	chosen=element.siblings().find('.active');
	theSrc=chosen.attr('src');
	element.attr('src',theSrc);
}

function getMarginValue(element,ex,ey,heightDiff,affectedDist){
	imgMidX=element.offset().left+(element.width()/ 2);
	imgMidY=element.offset().top+(element.height()/ 2);
	distanceX=Math.abs(ex- imgMidX);distanceY=Math.abs(ey- imgMidY);
	maxDist=Math.max(distanceX,distanceY);
	if(maxDist<affectedDist){
		maxDist=maxDist/(affectedDist/45);
		reducedMaxDist=heightDiff- maxDist;
		if(reducedMaxDist>1){
			return reducedMaxDist;
		}
	}
	return 0
}

function chosenImageSet(element,heightDiff,affectedDist){
	activImgX=element.find('.active').offset().left+(element.find('.active').width()/ 2);
	activImgY=element.find('.active').offset().top+(element.find('.active').height()/ 2);
	element.find('img').each(function(){margVal=getMarginValue(jQuery(this),activImgX,activImgY,heightDiff,affectedDist);jQuery(this).css('margin-top',-margVal);jQuery(this).css('margin-bottom',margVal);});
}

function resizeImage(element)
{
	element.find("img").each(function(index,element){
		jQuery(this).css({"width":"100px",
							"height":"100px"});
	});
}

function initDock(element,activeElem,affectedDist,heightDiff){
	resizeImage(element);
	element.css('padding-top',parseFloat(element.css('padding-top'))+heightDiff);
	element.mousemove(function(e){
		element.find('img').each(function(){
		margVal=getMarginValue(jQuery(this),e.pageX,e.pageY,heightDiff,affectedDist);
		jQuery(this).css('margin-top',-margVal);
		jQuery(this).css('margin-bottom',margVal);
		});
	});
	element.mouseleave(function(){
		chosenImageSet(element,heightDiff,affectedDist);
	});
	chosenImageSet(element,heightDiff,affectedDist);
	element.find('img').click(function(){
		jQuery('.attachment-dockImg').removeClass('active');
		jQuery(this).addClass('active');
		setChosen(jQuery('#chosenImg'));
	});
	setChosen(jQuery('#chosenImg'));
	chosenImageSet(element,heightDiff,affectedDist);
}

jQuery(window).load(function($) {
		initDock(jQuery('#dock'),jQuery('#dock img.active'),250,25);
		});
