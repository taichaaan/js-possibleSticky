/*! possibleSticky.js | v1.0.0 | license Copyright (C) 2022 Taichi Matsutaka */
/*
 *
 * @name    : possibleSticky.js
 * @content : possibleSticky
 * @url     : https://github.com/taichaaan/js-possibleSticky
 * @creation: 2022.02.25
 * @update  : 2020.00.00
 * @version : 1.0.0
 *
 */
(function(global) {[]
	global.possibleSticky = function(target,options){
		///////////////////////////////////////////////////////////////
		// defaults options
		///////////////////////////////////////////////////////////////
		this.targetElements = document.querySelectorAll( target );

		const defaults = {
			grace             : 0,
			isStickyEvent     : ['load','resize'],
			getWindowSizeEvent: ['DOMContentLoaded','resize'],
		}


		///////////////////////////////////////////////////////////////
		// options
		///////////////////////////////////////////////////////////////
		for( let option in options){
			defaults[option] = options[option];
		}
		this.options = defaults;


		///////////////////////////////////////////////////////////////
		// base
		///////////////////////////////////////////////////////////////
		this.removes = [];
		this.base();


	};
	possibleSticky.prototype = {
		base: function(){
			const _this   = this;
			const options = this.options;



			///////////////////////////////////////////////////////////////
			// window size
			///////////////////////////////////////////////////////////////
			let window_height = document.documentElement.clientHeight;

			const getWindowSize = function(){
				window_height = document.documentElement.clientHeight;
			}

			for ( let i = 0; i < options['getWindowSizeEvent'].length; i++ ) {
				window.addEventListener( options['getWindowSizeEvent'][i] ,getWindowSize);
				
				/* ---------- removes ---------- */
				_this.removes.push( function(){
					window.removeEventListener( options['getWindowSizeEvent'][i] ,getWindowSize);
				});
			}



			
			///////////////////////////////////////////////////////////////
			// isSticky
			///////////////////////////////////////////////////////////////
			const isSticky = function( target ){
				const targetHeight = target.clientHeight;
				const targetStyle  = getComputedStyle( target );
				const targetTop    = parseInt( targetStyle.getPropertyValue('top') );

				let height = new Number( targetHeight ) + new Number( targetTop ) + options['grace'];

				if( height < window_height ){
					target.classList.add('is-sticky');
				} else{
					target.classList.remove('is-sticky');
				}
			}




			///////////////////////////////////////////////////////////////
			// isStickyEvent
			///////////////////////////////////////////////////////////////
			const isStickyEvent = function(){
				for ( let i = 0; i < _this.targetElements.length; i++ ) {
					isSticky( _this.targetElements[i] );
				}
			}

			for ( let i = 0; i < options['isStickyEvent'].length; i++ ) {
				window.addEventListener( options['isStickyEvent'][i] ,isStickyEvent);

				/* ---------- removes ---------- */
				_this.removes.push( function(){
					window.removeEventListener( options['isStickyEvent'][i] ,isStickyEvent);
				});
			}


		},
		remove: function(){
			/* removes に追加された関数をforで一つずつ実行する。 */
			const removes = this.removes;

			if( !removes ) return;

			for ( let i = 0; i < removes.length; i++ ) {
				removes[i]();
			}
		},
	};

})(this);
