/* This notice must be untouched at all times.

wz_jsgraphics.js    v. 2.33
The latest version is available at
http://www.walterzorn.com
or http://www.devira.com
or http://www.walterzorn.de

Copyright (c) 2002-2004 Walter Zorn. All rights reserved.
Created 3. 11. 2002 by Walter Zorn (Web: http://www.walterzorn.com )
Last modified: 24. 10. 2005

Performance optimizations for Internet Explorer
by Thomas Frank and John Holdsworth.
fillPolygon method implemented by Matthieu Haller.

High Performance JavaScript Graphics Library.
Provides methods
- to draw lines, rectangles, ellipses, polygons
	with specifiable line thickness,
- to fill rectangles and ellipses
- to draw text.
NOTE: Operations, functions and branching have rather been optimized
to efficiency and speed than to shortness of source code.

LICENSE: LGPL

This library is free software; you can redistribute it and/or
modify it under the terms of the GNU Lesser General Public
License (LGPL) as published by the Free Software Foundation; either
version 2.1 of the License, or (at your option) any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public
License along with this library; if not, write to the Free Software
Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA,
or see http://www.gnu.org/copyleft/lesser.html
*/


var jg_ihtm, jg_ie, jg_fast, jg_dom, jg_moz,
jg_n4 = (document.layers && typeof document.classes != "undefined");


function chkDHTM(x, i)
{
	x = document.body || null;
	jg_ie = x && typeof x.insertAdjacentHTML != "undefined";
	jg_dom = (x && !jg_ie &&
		typeof x.appendChild != "undefined" &&
		typeof document.createRange != "undefined" &&
		typeof (i = document.createRange()).setStartBefore != "undefined" &&
		typeof i.createContextualFragment != "undefined");
	jg_ihtm = !jg_ie && !jg_dom && x && typeof x.innerHTML != "undefined";
	jg_fast = jg_ie && document.all && !window.opera;
	jg_moz = jg_dom && typeof x.style.MozOpacity != "undefined";
}


function pntDoc()
{
	this.wnd.document.write(jg_fast? this.htmRpc() : this.htm);
	this.htm = '';
}


function pntCnvDom()
{
	var x = document.createRange();
	x.setStartBefore(this.cnv);
	x = x.createContextualFragment(jg_fast? this.htmRpc() : this.htm);
	this.cnv.appendChild(x);
	this.htm = '';
}


function pntCnvIe()
{
	 this.cnv.insertAdjacentHTML("BeforeEnd", jg_fast? this.htmRpc() : this.htm);
	 
	this.htm = '';
}


function pntCnvIhtm() 
{
	this.cnv.innerHTML += this.htm;
	this.htm = '';
}


function pntCnv()
{
	this.htm = '';
}


function mkDiv(x, y, w, h)
{
	this.htm += '<div style="position:absolute;'+
		'left:' + x + 'px;'+
		'top:' + y + 'px;'+
		'width:' + w + 'px;'+
		'height:' + h + 'px;'+
		'clip:rect(0,'+w+'px,'+h+'px,0);'+
		'background-color:' + this.color +
		(!jg_moz? ';overflow:hidden' : '')+
		';"><\/div>';
}


function mkDivIe(x, y, w, h)
{
	this.htm += '%%'+this.color+';'+x+';'+y+';'+w+';'+h+';';
}


function mkDivPrt(x, y, w, h)
{
	this.htm += '<div style="position:absolute;'+
		'border-left:' + w + 'px solid ' + this.color + ';'+
		'left:' + x + 'px;'+
		'top:' + y + 'px;'+
		'width:0px;'+
		'height:' + h + 'px;'+
		'clip:rect(0,'+w+'px,'+h+'px,0);'+
		'background-color:' + this.color +
		(!jg_moz? ';overflow:hidden' : '')+
		';"><\/div>';
}


function mkLyr(x, y, w, h)
{
	this.htm += '<layer '+
		'left="' + x + '" '+
		'top="' + y + '" '+
		'width="' + w + '" '+
		'height="' + h + '" '+
		'bgcolor="' + this.color + '"><\/layer>\n';
}


var regex =  /%%([^;]+);([^;]+);([^;]+);([^;]+);([^;]+);/g;
function htmRpc()
{
	return this.htm.replace(
		regex,
		'<div style="overflow:hidden;position:absolute;background-color:'+
		'$1;left:$2;top:$3;width:$4;height:$5"></div>\n');
}


function htmPrtRpc()
{
	return this.htm.replace(
		regex,
		'<div style="overflow:hidden;position:absolute;background-color:'+
		'$1;left:$2;top:$3;width:$4;height:$5;border-left:$4px solid $1"></div>\n');
}


function mkLin(x1, y1, x2, y2)
{
	if (x1 > x2)
	{
		var _x2 = x2;
		var _y2 = y2;
		x2 = x1;
		y2 = y1;
		x1 = _x2;
		y1 = _y2;
	}
	var dx = x2-x1, dy = Math.abs(y2-y1),
	x = x1, y = y1,
	yIncr = (y1 > y2)? -1 : 1;

	if (dx >= dy)
	{
		var pr = dy<<1,
		pru = pr - (dx<<1),
		p = pr-dx,
		ox = x;
		while ((dx--) > 0)
		{
			++x;
			if (p > 0)
			{
				this.mkDiv(ox, y, x-ox, 1);
				y += yIncr;
				p += pru;
				ox = x;
			}
			else p += pr;
		}
		this.mkDiv(ox, y, x2-ox+1, 1);
	}

	else
	{
		var pr = dx<<1,
		pru = pr - (dy<<1),
		p = pr-dy,
		oy = y;
		if (y2 <= y1)
		{
			while ((dy--) > 0)
			{
				if (p > 0)
				{
					this.mkDiv(x++, y, 1, oy-y+1);
					y += yIncr;
					p += pru;
					oy = y;
				}
				else
				{
					y += yIncr;
					p += pr;
				}
			}
			this.mkDiv(x2, y2, 1, oy-y2+1);
		}
		else
		{
			while ((dy--) > 0)
			{
				y += yIncr;
				if (p > 0)
				{
					this.mkDiv(x++, oy, 1, y-oy);
					p += pru;
					oy = y;
				}
				else p += pr;
			}
			this.mkDiv(x2, oy, 1, y2-oy+1);
		}
	}
}


function mkLin2D(x1, y1, x2, y2)
{
	if (x1 > x2)
	{
		var _x2 = x2;
		var _y2 = y2;
		x2 = x1;
		y2 = y1;
		x1 = _x2;
		y1 = _y2;
	}
	var dx = x2-x1, dy = Math.abs(y2-y1),
	x = x1, y = y1,
	yIncr = (y1 > y2)? -1 : 1;

	var s = this.stroke;
	if (dx >= dy)
	{
		if (dx > 0 && s-3 > 0)
		{
			var _s = (s*dx*Math.sqrt(1+dy*dy/(dx*dx))-dx-(s>>1)*dy) / dx;
			_s = (!(s-4)? Math.ceil(_s) : Math.round(_s)) + 1;
		}
		else var _s = s;
		var ad = Math.ceil(s/2);

		var pr = dy<<1,
		pru = pr - (dx<<1),
		p = pr-dx,
		ox = x;
		while ((dx--) > 0)
		{
			++x;
			if (p > 0)
			{
				this.mkDiv(ox, y, x-ox+ad, _s);
				y += yIncr;
				p += pru;
				ox = x;
			}
			else p += pr;
		}
		this.mkDiv(ox, y, x2-ox+ad+1, _s);
	}

	else
	{
		if (s-3 > 0)
		{
			var _s = (s*dy*Math.sqrt(1+dx*dx/(dy*dy))-(s>>1)*dx-dy) / dy;
			_s = (!(s-4)? Math.ceil(_s) : Math.round(_s)) + 1;
		}
		else var _s = s;
		var ad = Math.round(s/2);

		var pr = dx<<1,
		pru = pr - (dy<<1),
		p = pr-dy,
		oy = y;
		if (y2 <= y1)
		{
			++ad;
			while ((dy--) > 0)
			{
				if (p > 0)
				{
					this.mkDiv(x++, y, _s, oy-y+ad);
					y += yIncr;
					p += pru;
					oy = y;
				}
				else
				{
					y += yIncr;
					p += pr;
				}
			}
			this.mkDiv(x2, y2, _s, oy-y2+ad);
		}
		else
		{
			while ((dy--) > 0)
			{
				y += yIncr;
				if (p > 0)
				{
					this.mkDiv(x++, oy, _s, y-oy+ad);
					p += pru;
					oy = y;
				}
				else p += pr;
			}
			this.mkDiv(x2, oy, _s, y2-oy+ad+1);
		}
	}
}


function mkLinDott(x1, y1, x2, y2)
{
	if (x1 > x2)
	{
		var _x2 = x2;
		var _y2 = y2;
		x2 = x1;
		y2 = y1;
		x1 = _x2;
		y1 = _y2;
	}
	var dx = x2-x1, dy = Math.abs(y2-y1),
	x = x1, y = y1,
	yIncr = (y1 > y2)? -1 : 1,
	drw = true;
	if (dx >= dy)
	{
		var pr = dy<<1,
		pru = pr - (dx<<1),
		p = pr-dx;
		while ((dx--) > 0)
		{
			if (drw) this.mkDiv(x, y, 1, 1);
			drw = !drw;
			if (p > 0)
			{
				y += yIncr;
				p += pru;
			}
			else p += pr;
			++x;
		}
		if (drw) this.mkDiv(x, y, 1, 1);
	}

	else
	{
		var pr = dx<<1,
		pru = pr - (dy<<1),
		p = pr-dy;
		while ((dy--) > 0)
		{
			if (drw) this.mkDiv(x, y, 1, 1);
			drw = !drw;
			y += yIncr;
			if (p > 0)
			{
				++x;
				p += pru;
			}
			else p += pr;
		}
		if (drw) this.mkDiv(x, y, 1, 1);
	}
}


function mkOv(left, top, width, height)
{
	var a = width>>1, b = height>>1,
	wod = width&1, hod = (height&1)+1,
	cx = left+a, cy = top+b,
	x = 0, y = b,
	ox = 0, oy = b,
	aa = (a*a)<<1, bb = (b*b)<<1,
	st = (aa>>1)*(1-(b<<1)) + bb,
	tt = (bb>>1) - aa*((b<<1)-1),
	w, h;
	while (y > 0)
	{
		if (st < 0)
		{
			st += bb*((x<<1)+3);
			tt += (bb<<1)*(++x);
		}
		else if (tt < 0)
		{
			st += bb*((x<<1)+3) - (aa<<1)*(y-1);
			tt += (bb<<1)*(++x) - aa*(((y--)<<1)-3);
			w = x-ox;
			h = oy-y;
			if (w&2 && h&2)
			{
				this.mkOvQds(cx, cy, -x+2, ox+wod, -oy, oy-1+hod, 1, 1);
				this.mkOvQds(cx, cy, -x+1, x-1+wod, -y-1, y+hod, 1, 1);
			}
			else this.mkOvQds(cx, cy, -x+1, ox+wod, -oy, oy-h+hod, w, h);
			ox = x;
			oy = y;
		}
		else
		{
			tt -= aa*((y<<1)-3);
			st -= (aa<<1)*(--y);
		}
	}
	this.mkDiv(cx-a, cy-oy, a-ox+1, (oy<<1)+hod);
	this.mkDiv(cx+ox+wod, cy-oy, a-ox+1, (oy<<1)+hod);
}


function mkOv2D(left, top, width, height)
{
	var s = this.stroke;
	width += s-1;
	height += s-1;
	var a = width>>1, b = height>>1,
	wod = width&1, hod = (height&1)+1,
	cx = left+a, cy = top+b,
	x = 0, y = b,
	aa = (a*a)<<1, bb = (b*b)<<1,
	st = (aa>>1)*(1-(b<<1)) + bb,
	tt = (bb>>1) - aa*((b<<1)-1);

	if (s-4 < 0 && (!(s-2) || width-51 > 0 && height-51 > 0))
	{
		var ox = 0, oy = b,
		w, h,
		pxl, pxr, pxt, pxb, pxw;
		while (y > 0)
		{
			if (st < 0)
			{
				st += bb*((x<<1)+3);
				tt += (bb<<1)*(++x);
			}
			else if (tt < 0)
			{
				st += bb*((x<<1)+3) - (aa<<1)*(y-1);
				tt += (bb<<1)*(++x) - aa*(((y--)<<1)-3);
				w = x-ox;
				h = oy-y;

				if (w-1)
				{
					pxw = w+1+(s&1);
					h = s;
				}
				else if (h-1)
				{
					pxw = s;
					h += 1+(s&1);
				}
				else pxw = h = s;
				this.mkOvQds(cx, cy, -x+1, ox-pxw+w+wod, -oy, -h+oy+hod, pxw, h);
				ox = x;
				oy = y;
			}
			else
			{
				tt -= aa*((y<<1)-3);
				st -= (aa<<1)*(--y);
			}
		}
		this.mkDiv(cx-a, cy-oy, s, (oy<<1)+hod);
		this.mkDiv(cx+a+wod-s+1, cy-oy, s, (oy<<1)+hod);
	}

	else
	{
		var _a = (width-((s-1)<<1))>>1,
		_b = (height-((s-1)<<1))>>1,
		_x = 0, _y = _b,
		_aa = (_a*_a)<<1, _bb = (_b*_b)<<1,
		_st = (_aa>>1)*(1-(_b<<1)) + _bb,
		_tt = (_bb>>1) - _aa*((_b<<1)-1),

		pxl = new Array(),
		pxt = new Array(),
		_pxb = new Array();
		pxl[0] = 0;
		pxt[0] = b;
		_pxb[0] = _b-1;
		while (y > 0)
		{
			if (st < 0)
			{
				st += bb*((x<<1)+3);
				tt += (bb<<1)*(++x);
				pxl[pxl.length] = x;
				pxt[pxt.length] = y;
			}
			else if (tt < 0)
			{
				st += bb*((x<<1)+3) - (aa<<1)*(y-1);
				tt += (bb<<1)*(++x) - aa*(((y--)<<1)-3);
				pxl[pxl.length] = x;
				pxt[pxt.length] = y;
			}
			else
			{
				tt -= aa*((y<<1)-3);
				st -= (aa<<1)*(--y);
			}

			if (_y > 0)
			{
				if (_st < 0)
				{
					_st += _bb*((_x<<1)+3);
					_tt += (_bb<<1)*(++_x);
					_pxb[_pxb.length] = _y-1;
				}
				else if (_tt < 0)
				{
					_st += _bb*((_x<<1)+3) - (_aa<<1)*(_y-1);
					_tt += (_bb<<1)*(++_x) - _aa*(((_y--)<<1)-3);
					_pxb[_pxb.length] = _y-1;
				}
				else
				{
					_tt -= _aa*((_y<<1)-3);
					_st -= (_aa<<1)*(--_y);
					_pxb[_pxb.length-1]--;
				}
			}
		}

		var ox = 0, oy = b,
		_oy = _pxb[0],
		l = pxl.length,
		w, h;
		for (var i = 0; i < l; i++)
		{
			if (typeof _pxb[i] != "undefined")
			{
				if (_pxb[i] < _oy || pxt[i] < oy)
				{
					x = pxl[i];
					this.mkOvQds(cx, cy, -x+1, ox+wod, -oy, _oy+hod, x-ox, oy-_oy);
					ox = x;
					oy = pxt[i];
					_oy = _pxb[i];
				}
			}
			else
			{
				x = pxl[i];
				this.mkDiv(cx-x+1, cy-oy, 1, (oy<<1)+hod);
				this.mkDiv(cx+ox+wod, cy-oy, 1, (oy<<1)+hod);
				ox = x;
				oy = pxt[i];
			}
		}
		this.mkDiv(cx-a, cy-oy, 1, (oy<<1)+hod);
		this.mkDiv(cx+ox+wod, cy-oy, 1, (oy<<1)+hod);
	}
}


function mkOvDott(left, top, width, height)
{
	var a = width>>1, b = height>>1,
	wod = width&1, hod = height&1,
	cx = left+a, cy = top+b,
	x = 0, y = b,
	aa2 = (a*a)<<1, aa4 = aa2<<1, bb = (b*b)<<1,
	st = (aa2>>1)*(1-(b<<1)) + bb,
	tt = (bb>>1) - aa2*((b<<1)-1),
	drw = true;
	while (y > 0)
	{
		if (st < 0)
		{
			st += bb*((x<<1)+3);
			tt += (bb<<1)*(++x);
		}
		else if (tt < 0)
		{
			st += bb*((x<<1)+3) - aa4*(y-1);
			tt += (bb<<1)*(++x) - aa2*(((y--)<<1)-3);
		}
		else
		{
			tt -= aa2*((y<<1)-3);
			st -= aa4*(--y);
		}
		if (drw) this.mkOvQds(cx, cy, -x, x+wod, -y, y+hod, 1, 1);
		drw = !drw;
	}
}


function mkRect(x, y, w, h)
{
	var s = this.stroke;
	this.mkDiv(x, y, w, s);
	this.mkDiv(x+w, y, s, h);
	this.mkDiv(x, y+h, w+s, s);
	this.mkDiv(x, y+s, s, h-s);
}


function mkRectDott(x, y, w, h)
{
	this.drawLine(x, y, x+w, y);
	this.drawLine(x+w, y, x+w, y+h);
	this.drawLine(x, y+h, x+w, y+h);
	this.drawLine(x, y, x, y+h);
}


function jsgFont()
{
	this.PLAIN = 'font-weight:normal;';
	this.BOLD = 'font-weight:bold;';
	this.ITALIC = 'font-style:italic;';
	this.ITALIC_BOLD = this.ITALIC + this.BOLD;
	this.BOLD_ITALIC = this.ITALIC_BOLD;
}
var Font = new jsgFont();


function jsgStroke()
{
	this.DOTTED = -1;
}
var Stroke = new jsgStroke();


function jsGraphics(id, wnd)
{
	this.setColor = new Function('arg', 'this.color = arg.toLowerCase();');

	this.setStroke = function(x)
	{
		this.stroke = x;
		if (!(x+1))
		{
			this.drawLine = mkLinDott;
			this.mkOv = mkOvDott;
			this.drawRect = mkRectDott;
		}
		else if (x-1 > 0)
		{
			this.drawLine = mkLin2D;
			this.mkOv = mkOv2D;
			this.drawRect = mkRect;
		}
		else
		{
			this.drawLine = mkLin;
			this.mkOv = mkOv;
			this.drawRect = mkRect;
		}
	};


	this.setPrintable = function(arg)
	{
		this.printable = arg;
		if (jg_fast)
		{
			this.mkDiv = mkDivIe;
			this.htmRpc = arg? htmPrtRpc : htmRpc;
		}
		else this.mkDiv = jg_n4? mkLyr : arg? mkDivPrt : mkDiv;
	};


	this.setFont = function(fam, sz, sty)
	{
		this.ftFam = fam;
		this.ftSz = sz;
		this.ftSty = sty || Font.PLAIN;
	};
	
	


	this.drawPolyline = this.drawPolyLine = function(x, y, s)
	{
		for (var i=0 ; i<x.length-1 ; i++ )
			this.drawLine(x[i], y[i], x[i+1], y[i+1]);
	};


	this.fillRect = function(x, y, w, h)
	{
		this.mkDiv(x, y, w, h);
	};


	this.drawPolygon = function(x, y)
	{
		this.drawPolyline(x, y);
		this.drawLine(x[x.length-1], y[x.length-1], x[0], y[0]);
	};


	this.drawEllipse = this.drawOval = function(x, y, w, h)
	{
		this.mkOv(x, y, w, h);
	};


	this.fillEllipse = this.fillOval = function(left, top, w, h)
	{
		var a = (w -= 1)>>1, b = (h -= 1)>>1,
		wod = (w&1)+1, hod = (h&1)+1,
		cx = left+a, cy = top+b,
		x = 0, y = b,
		ox = 0, oy = b,
		aa2 = (a*a)<<1, aa4 = aa2<<1, bb = (b*b)<<1,
		st = (aa2>>1)*(1-(b<<1)) + bb,
		tt = (bb>>1) - aa2*((b<<1)-1),
		pxl, dw, dh;
		if (w+1) while (y > 0)
		{
			if (st < 0)
			{
				st += bb*((x<<1)+3);
				tt += (bb<<1)*(++x);
			}
			else if (tt < 0)
			{
				st += bb*((x<<1)+3) - aa4*(y-1);
				pxl = cx-x;
				dw = (x<<1)+wod;
				tt += (bb<<1)*(++x) - aa2*(((y--)<<1)-3);
				dh = oy-y;
				this.mkDiv(pxl, cy-oy, dw, dh);
				this.mkDiv(pxl, cy+y+hod, dw, dh);
				ox = x;
				oy = y;
			}
			else
			{
				tt -= aa2*((y<<1)-3);
				st -= aa4*(--y);
			}
		}
		this.mkDiv(cx-a, cy-oy, w+1, (oy<<1)+hod);
	};


/* fillPolygon method, implemented by Matthieu Haller.
This javascript function is an adaptation of the gdImageFilledPolygon for Walter Zorn lib.
C source of GD 1.8.4 found at http://www.boutell.com/gd/

THANKS to Kirsten Schulz for the polygon fixes!

The intersection finding technique of this code could be improved
by remembering the previous intertersection, and by using the slope.
That could help to adjust intersections to produce a nice
interior_extrema. */
	this.fillPolygon = function(array_x, array_y)
	{
		var i;
		var y;
		var miny, maxy;
		var x1, y1;
		var x2, y2;
		var ind1, ind2;
		var ints;

		var n = array_x.length;

		if (!n) return;


		miny = array_y[0];
		maxy = array_y[0];
		for (i = 1; i < n; i++)
		{
			if (array_y[i] < miny)
				miny = array_y[i];

			if (array_y[i] > maxy)
				maxy = array_y[i];
		}
		for (y = miny; y <= maxy; y++)
		{
			var polyInts = new Array();
			ints = 0;
			for (i = 0; i < n; i++)
			{
				if (!i)
				{
					ind1 = n-1;
					ind2 = 0;
				}
				else
				{
					ind1 = i-1;
					ind2 = i;
				}
				y1 = array_y[ind1];
				y2 = array_y[ind2];
				if (y1 < y2)
				{
					x1 = array_x[ind1];
					x2 = array_x[ind2];
				}
				else if (y1 > y2)
				{
					y2 = array_y[ind1];
					y1 = array_y[ind2];
					x2 = array_x[ind1];
					x1 = array_x[ind2];
				}
				else continue;

				 // modified 11. 2. 2004 Walter Zorn
				if ((y >= y1) && (y < y2))
					polyInts[ints++] = Math.round((y-y1) * (x2-x1) / (y2-y1) + x1);

				else if ((y == maxy) && (y > y1) && (y <= y2))
					polyInts[ints++] = Math.round((y-y1) * (x2-x1) / (y2-y1) + x1);
			}
			polyInts.sort(integer_compare);
			for (i = 0; i < ints; i+=2)
				this.mkDiv(polyInts[i], y, polyInts[i+1]-polyInts[i]+1, 1);
		}
	};


	this.drawString = function(txt, x, y,w,h)
	{
			var line_h =parseInt(this.ftSz.substring(0, this.ftSz.lastIndexOf("px")))+3 ;
	        line_h = line_h+"px";
		    this.htm += '<div style="position:absolute;white-space:nowrap;'+
	       'top:expression(('+h+'-this.offsetHeight)/2);left:expression(('+w+'-this.offsetWidth)/2);'+
			/*'width:' + w + 'px;'+
			'height:' + h + 'px;'+*/
			'font-family:' +  this.ftFam + ';line-height:'+line_h+';'+
			'font-size:' + this.ftSz + ';'+
			'color:' + this.color + ';' + this.ftSty + 'text-align:center; ">'+
			txt +
			'<\/div>';
			
	};
	
	this.drawStringBottom=function(txt,font, x, y,w,h) //??????????????һ???? 
	{
		this.htm += '<div style="position:absolute;white-space:nowrap;'+
	       'top:expression('+h+'/2+'+h+'/6);left:expression(('+w+'-this.offsetWidth)/2);'+
			/*'width:' + w + 'px;'+
			'height:' + h + 'px;'+*/
			'font-family:' +  this.ftFam + ';line-height:'+font+';'+
			'font-size:'+font+';'+
			'color:' + this.color + ';' + this.ftSty + 'text-align:center; ">'+
			txt +
			'<\/div>';
   };
   
   this.drawPolygonFrameString=function(txt,w,h) //???????????еĴ??????? 
	{
		var tmp_height = 23;
		this.htm += '<div style="position:absolute;white-space:nowrap;'+
	       'top:expression('+(42)+');left:expression(('+w+'-this.offsetWidth)/2);'+
			'width:76px;'+
			'height:' + tmp_height + 'px;line-height:'+tmp_height+'px;'+
			'font-family:' +  this.ftFam + ';'+
			'font-size:12px; font-weight:bold;'+
			'color:' + this.color + '; text-align:center; '+
			'border:1px solid;">'+
			txt +
			'<\/div>';
   };
   
   this.drawEllipseFrameString=function(txt,w,h) //????Բ???еĴ??????? 
	{
		var tmp_height = 26;
		this.htm += '<div style="position:absolute;white-space:nowrap;'+
	       'top:expression('+(h/2-tmp_height/2+7)+');left:expression(('+w+'-this.offsetWidth)/2);'+
			'width:79px;'+
			'height:' + tmp_height + 'px;line-height:'+tmp_height+'px;'+
			'font-family:' +  this.ftFam + ';'+
			'font-size:12px; font-weight:bold;'+
			'color:' + this.color + '; text-align:center; '+
			'border:1px solid;">'+
			txt +
			'<\/div>';
   };
   
    this.drawEllipseFrameStringUnborder=function(txt,w,h) //????Բ???еĲ????????? 
	{   
		var tmp_height = 26;
		this.htm += '<div style="position:absolute;white-space:nowrap;'+
	       'top:expression('+(h/2-tmp_height/2+7)+');left:expression(('+w+'-this.offsetWidth)/2);'+
			'width:79px;'+
			'height:' + tmp_height + 'px;line-height:'+tmp_height+'px;'+
			'font-family:' +  this.ftFam + ';'+
			'font-size:12px; font-weight:bold;'+
			'color:' + this.color + '; text-align:center;"> '+
			txt +
			'<\/div>';
   };
   
   this.drawArcString=function(maindivid,txt,font,divid,x,y,w,h,yujiao) //?????µ? ?????֣???????
	{
	   //Ĭ?Ϲ??µĿ?ʼ?ͽ???2????֮???Ĺ̶??нǶ???Ϊ108
	   this.drawArcStringNew(maindivid,txt,font,divid,x,y,w,h,(!yujiao?108:yujiao));
//		 msg=txt;
//      msgColor=this.color;
//      msgFont="????_GB2312";
//      
//      msg=msg.split('');
//      n=msg.length; 
//      e=360/n;
//      yp=0;
//      xp=0;
//      yb=h/2-h/10;
//      xb=w/2-w/10;
//      sa=0.07;
//      sb=0;
//      pa=new Array();
//      pb=new Array();
//      
//      
//      for (i=0; i < n; i++){
//      document.getElementsByName(maindivid)[0].innerHTML+='<div id="'+divid+'" style="position:absolute;top:0;left:0;'
//      +'height:30;width:30;font-family:'+msgFont+';text-align:center;color:'+msgColor+';font-size:'+font+';">'+msg[i]+'</div>';
//      } 
//      
//    
//    yp=document.body.scrollTop+yb+5;
//    xp=document.body.scrollLeft-xb+w/2;
//      
//     ypsin =yp-yb*Math.sin(sb+0*e*Math.PI/320)+5;
//     xpcos=xp-xb*Math.cos(sb+0*e*Math.PI/320)+w/10+3;
//     
//     
//     endcos=(xp-xb*Math.cos(sb+(n-1)*e*Math.PI/320)+w/10)-xpcos+3;
//     
//     Ycoordinate=h/2-ypsin;
//     Xcoordinate=(w-endcos-30)/2;
//       for (i=0; i < n; i++){
//       document.getElementsByName(divid)[i].style.top =yp-yb*Math.sin(sb+i*e*Math.PI/320)+Ycoordinate;
//        document.getElementsByName(divid)[i].style.left=(xp-xb*Math.cos(sb+i*e*Math.PI/320)+w/10)-xpcos+3+Xcoordinate;
//     }     
	}
   /**
    * ??Բ????????
    * 2009-10-13
    * @param maindivid ??DIV ID
    * @param txt ?ı?????
    * @param font ????
    * @param divid ?????ɵ?????DIV??ID,?ж??ٸ????־??ж??ٸ???ID??DIV
    * @param x Ŀǰû??ʹ??
    * @param y Ŀǰû??ʹ??
    * @param w ???µĿ???
    * @param h ???µĸ߶?
    * @param yujiao ?????ʼ???ֺ?????һ????֮???Ĺ̶??ж???
    * @return
    */
   this.drawArcStringNew=function(maindivid,txt,font,divid,x,y,w,h,yujiao) //?????µ? ?????֣???????
	{
	  msg=txt;
      msgColor=this.color;
      msgFont="????_GB2312";

      msg=msg.split('');
      n=msg.length; 
       
      yp=0;
      xp=0;
      yb=h/2-h/10;
      xb=w/2-w/10;
      sa=0.07;
      sb=0;
      pa=new Array();
      pb=new Array();
      if(n==1){
    	  e=0;
    	  sb=90;
      }else{
    	  e=(360-yujiao)/(n-1); 
    	  sb=-90+yujiao/2;
      }        
      
      for (i=0; i < n; i++){
      	document.getElementsByName(maindivid)[0].innerHTML+='<div id="'+divid+'" '+ 
      		'style="position:absolute;top:0;left:0;' + 
      		'height:30;width:30;font-family:'+msgFont+';text-align:center;line-height:30px;' + 
      		'color:'+msgColor+';font-size:'+font+';font-weight:bold;'+
      		'filter:progid:DXImageTransform.Microsoft.Matrix (sizingMethod=\'auto expand\')'+'">'+msg[i]+'</div>';
      }       
      
     Ycoordinate=h/2;
     Xcoordinate=w/2;
     yp=0;
     xp=3;//΢??????΢ƫ??һ?£?ʹ֮???ⲿ??Բ????ƥ??
       for (i=0; i < n; i++){
        document.getElementsByName(divid)[i].style.top =yp-yb*Math.sin((sb+i*e)*Math.PI/180)+Ycoordinate-15;
        document.getElementsByName(divid)[i].style.left=(xp-xb*Math.cos((sb+i*e)*Math.PI/180))+Xcoordinate-15;
        {//΢??????ת???µ??е?ƫ?ƣ?ͨ??΢??ʹ?е?λ?ò???
        	var x1,y1,x2,y2,w,h;
        	var arc;
        	arc=-90+(sb+i*e);
        	if(Math.sin(arc*Math.PI/180)!=0 && Math.cos(arc*Math.PI/180)!=0 ){
        		x1=(30/2)*Math.cos((45+arc)*Math.PI/180)/Math.cos(45*Math.PI/180);
        		y1=(30/2)*Math.sin((45+arc)*Math.PI/180)/Math.sin(45*Math.PI/180);
        		x2=(30/2)*Math.cos((-45+arc)*Math.PI/180)/Math.cos(-45*Math.PI/180);
        		y2=(30/2)*Math.sin((-45+arc)*Math.PI/180)/Math.sin(-45*Math.PI/180);
        		if(Math.abs(x1)>Math.abs(x2)){
        			w=Math.abs(x1)*2;
        		}else{
        			w=Math.abs(x2)*2;
        		}
        		if(Math.abs(y1)>Math.abs(y2)){
        			h=Math.abs(y1)*2;
        		}else{
        			h=Math.abs(y2)*2;
        		}
                document.getElementsByName(divid)[i].style.top =yp-yb*Math.sin((sb+i*e)*Math.PI/180)+Ycoordinate-15-(h/2-15);
                document.getElementsByName(divid)[i].style.left=(xp-xb*Math.cos((sb+i*e)*Math.PI/180))+Xcoordinate-15-(w/2-15);
        	}
        }
        //??ת
        if(n>1){
            var step,currentDeg;
            step=180/(n-1);
            currentDeg=i*step+270;
            fnSetRotation(document.getElementsByName(divid)[i],(-90+(sb+i*e)));        	 
        }
     }      
	}
/* drawStringRect() added by Rick Blommers.
Allows to specify the size of the text rectangle and to align the
text both horizontally (e.g. right) and vertically within that rectangle */
	this.drawStringRect = function(txt, x, y, width, halign)
	{
		this.htm += '<div style="position:absolute;overflow:hidden;'+
			'left:' + x + 'px;'+
			'top:' + y + 'px;'+
			'width:'+width +'px;'+
			'text-align:'+halign+';'+
			'font-family:' +  this.ftFam + ';'+
			'font-size:' + this.ftSz + ';'+
			'color:' + this.color + ';' + this.ftSty + '">'+
			txt +
			'<\/div>';
	};


	this.drawImage = function(imgSrc, x, y, w, h, a)
	{
		this.htm += '<div style="position:absolute;'+
			'left:' + x + 'px;'+
			'top:' + y + 'px;'+
			'width:' +  w + ';'+
			'height:' + h + ';">'+
			'<img src="' + imgSrc + '" width="' + w + '" height="' + h + '"' + (a? (' '+a) : '') + '>'+
			'<\/div>';
	};


	this.clear = function()
	{
		this.htm = "";
		if (this.cnv) this.cnv.innerHTML = this.defhtm;
	};


	this.mkOvQds = function(cx, cy, xl, xr, yt, yb, w, h)
	{
		this.mkDiv(xr+cx, yt+cy, w, h);
		this.mkDiv(xr+cx, yb+cy, w, h);
		this.mkDiv(xl+cx, yb+cy, w, h);
		this.mkDiv(xl+cx, yt+cy, w, h);
	};

	this.setStroke(1);
	this.setFont('verdana,geneva,helvetica,sans-serif', String.fromCharCode(0x31, 0x32, 0x70, 0x78), Font.PLAIN);
	this.color = '#000000';
	this.htm = '';
	this.wnd = wnd || window;

	if (!(jg_ie || jg_dom || jg_ihtm)) chkDHTM();
	if (typeof id != 'string' || !id) this.paint = pntDoc;
	else
	{
		this.cnv = document.all? (this.wnd.document.all[id] || null)
			: document.getElementById? (this.wnd.document.getElementById(id) || null)
			: null;
		this.defhtm = (this.cnv && this.cnv.innerHTML)? this.cnv.innerHTML : '';
		this.paint = jg_dom? pntCnvDom : jg_ie? pntCnvIe : jg_ihtm? pntCnvIhtm : pntCnv;
	}

	this.setPrintable(false);
}



function integer_compare(x,y)
{
	return (x < y) ? -1 : ((x > y)*1);
}

function  hasDiv(arg_divname)
{ 
   var obj=document.getElementById(arg_divname);
   if (obj!=null) 
      return true;
   else
      return false;
}

function draw_gz(arg_divname,arg_shape,arg_text, w, h , font, color )//7??????
{
     draw_gz(arg_divname,arg_shape,arg_text, 0,0,w, h , font, color );
}

function draw_gz(arg_divname,arg_shape,arg_text, x,y, w, h , font, color )//9??????
{ //?????? div_id_str????״_str, ?????ı?_str??????_int???߶?_int??????_str??ɫ??_str
  //ע??   div_id ??Сд????
   var jg = new jsGraphics(arg_divname);  
    jg.setColor(color) 
    jg.setFont("Verdana",font,""); 

    if (arg_shape=='1')
    {
      jg.setStroke(4)
      jg.drawEllipse(x,y,w, h ); 
      jg.drawString(arg_text, x+10, y+10); 
    }
    else if (arg_shape=='2') 
    {
      jg.setStroke(1)
      jg.drawRect(x,y,w, h ); 
      jg.drawString(arg_text, x+4, y+4 ); 
    }
    else 
    {
        jg.setStroke(2)
        var Xpoints = new Array(x,w,w/2); 
        var Ypoints = new Array(x,y,h  ); 
        jg.drawPolygon(Xpoints, Ypoints); 
        jg.drawString(arg_text,  x+4, y+4 ); 
    }
    jg.paint();
}

/*
 200708 ?????£??????Զ???????, ?Զ????? 
*/
function draw_gz(arg_divname,arg_shape,arg_text,
                  arg_text_arc,arg_text_arc_font,
                  arg_text_bottom,arg_text_bottom_font,w, h , font, color,dynamicText) //??12????
{ 
	draw_gz(arg_divname,arg_shape,arg_text,
                  arg_text_arc,arg_text_arc_font,
                  arg_text_bottom,arg_text_bottom_font,w, h , font, color,dynamicText,'');
}

/*
 200708 ?????£??????Զ???????, ?Զ????? 
*/
function draw_gz(arg_divname,arg_shape,arg_text,
                  arg_text_arc,arg_text_arc_font,
                  arg_text_bottom,arg_text_bottom_font,w, h , font, color,dynamicText,yujiao) //??13????
{ 
 
  	//????1?? arg_divname?? 
  	//????2?? arg_shape   ??״_str??1=Բ?Σ?2=?ķ??Σ?3=?????Σ?, 
  	//????3?? arg_text    ?????ı?_str???м䣬ֱ?Ļ??????ڶ???
  	//????4?? arg_text_arc  ?????? ????????????һ?У?
  	//????5?? arg_text_arc_font    ?????? ???? 
  	//????6?? arg_text_bottom      ??????һ?е? ????
  	//????7?? arg_text_bottom_font ??????һ???ֵ????? 
  	//????8?? w   ????_int
  	//????9?? h   ?߶?_int
  	//????10?? font  ?ڶ??е? ????
  	//????11??  color  ɫ??_str
	//????12:  ӡ?¶?̬?ı???????֮???ģ?
	//????13?? Բ??ӡ??????
    //ע??   div_id ??Сд????
    //alert(arg_shape + ","+h);
    if ( !hasDiv(arg_divname) )  alert('û??div :'+arg_divname); 
    var jg = new jsGraphics(arg_divname); //һ??Ҫ??div_id ????????????????onload??ִ??, ?? GZ  
    jg.setColor(color); //jg.setColor("RED")
    jg.setFont("????_GB2312",font,""); //jg.setFont("arial","10px",""); 

    if (arg_shape=='1') //Բ??
    {
    	jg.setFont("????_GB2312",font,"font-weight:bold;");
      	jg.setStroke(4)
       	jg.drawEllipse(0,0,w, h ); //(x, y, w, h)
       	jg.drawString(arg_text, 0, 0,w,h ); //???????????? 
       	/////////////////////////
       	//dynamicText = "2009.10.14";
       	//dynamicText = "˰??:12345678901234";
       	if(dynamicText){
       		jg.drawEllipseFrameString(dynamicText, w, h);
       	}
       	/////////////////////////
	    jg.drawStringBottom(arg_text_bottom,arg_text_bottom_font,0,0,w,h);	//???µײ?  
		//var yujiao = '108';
		yujiao = (!yujiao) ? '208' : yujiao;
		jg.drawArcString(arg_divname,arg_text_arc,arg_text_arc_font,"arcString"+arg_divname, 0, 0,w,h ,yujiao);	  //??????????
    }
    else if (arg_shape=='2') //?ķ???
    {
    	jg.setFont("????_GB2312",font,"font-weight:bold;");
      	jg.setStroke(2);
	  	jg.drawRect(0,0,w, h ); //(x, y, w, h)
      	jg.drawString(arg_text,0,0, w, h ); //???????? ?? ֻ?????м?????һ??
      	
      	if(dynamicText){
       		jg.drawEllipseFrameStringUnborder(dynamicText, w, h); //?????£???̬??????û?п???Ŀǰ??д???ģ?TODO??hasBorder?ֶο????Ƿ??п????˹??ܴ?????
       	}
    }
    else if (arg_shape=='3') //??????
    {
    	jg.setFont("????_GB2312",font,"font-weight:bold;line-height:15px;");
        jg.setStroke(3);
        var Xpoints = new Array(0,w,w/2); 
        var Ypoints = new Array(0,0,h  ); 
        jg.drawPolygon(Xpoints, Ypoints); 
        jg.drawString("<br>"+arg_text,0,0, w,28 ); //???????? ?? ֻ?????м?????һ??
        //jg.drawString(arg_text_bottom,0,0, w,h ); //???????? ?? ֻ?????м?????һ??
        /////////////////////     
        //dynamicText = "2009.10.12"
        if(dynamicText){
        	jg.drawPolygonFrameString(dynamicText, w, h); //???????????Ķ???
        }
        /////////////////////
        jg.drawStringBottom("<br>"+arg_text_bottom,arg_text_bottom_font,0,0,w,h/2);	//???µײ?  
    }
    else if (arg_shape == '4'){//ǩ??
    	jg.setColor(color);
	  	jg.setFont("????_GB2312",font,"filter:glow(color=#9898BA,strength=5)");
	  
	  	//jg.setFont("????",font,"FILTER: dropshadow(color=#B4BBCF,offx=6,offy=6,positive=1);color:#000000;font-weight:normal;font-style:normal;");
      	jg.drawString(arg_text,0,0, w, h ); //???????? ?? ֻ?????м?????һ??
      	/*
      	var temp_font = font.toLowerCase().replace('px','');
      	var temp_x = 0 - 0;
      	for(var i=0,len=arg_text.length;i<len;i++){
      		var temp_font2 = temp_font - 0 + (i%2==0?4:0);      		
      		jg.setFont("????",temp_font2 + 'px',"filter:glow(color="+color+",strength=1);");
      		jg.drawString(arg_text.charAt(i),0,0,temp_x,h);
      		temp_x += temp_font2 - 0 + 20;
      		//alert(temp_x);
      	}
      	*/
    }else if(arg_shape=='5'){
       document.getElementById(arg_divname).innerHTML="<img style='position:absolute' src='"+arg_text.replace(/(^\s*)|(\s*$)/g, "")+"' width='"+w+"' height='"+h+"'></img>";
       $(document.getElementById(arg_divname)).css({"z-index":"1000"});
    }
    jg.paint();
}


//ԭ??????Ϊdraw_line?????ĳɵ?ǰ???ƣ?Ϊ?????Զ????ߣ?????û?б仯
function _Bill_draw_line(arg_divname, x1,y1,x2,y2, line_color , line_type)
{  
    var jg = new jsGraphics(arg_divname); 
     jg.setColor(line_color) 
    
    if (line_type=='1')        //һ??????
    {
      jg.setStroke(1)
      jg.drawLine(x1, y1, x2, y2);
 
    }
    else if (line_type=='2')  //????????
    {
      jg.setStroke(2)
      jg.drawLine(x1, y1-3, x2, y2-3);
      jg.drawLine(x1, y1+3, x2, y2+3);
    }
    else if (line_type=='3')  //????????
    {
      jg.setStroke(2)
      jg.drawLine(x1, y1, x2, y2);
      jg.drawLine(x1, y1+25, x2, y2+25);
      jg.drawLine(x1, y1+28, x2, y2+28);
    }
    else 
    {
      jg.setStroke(1)
      jg.drawLine(x1, y1, x2, y2);
    }
    jg.paint();
}

////////////////////////////////////////////////////////////////////////////
///////////////////// ?Զ????? edit by xiejs at 2008-6-25 ////////////////////
////////////////////////////////////////////////////////////////////////////
//????ѧ??????ʱ??????ʦ??????ʱ??һ??Ҳ?У???ϵͳ?Զ?Ϊѧ????
//?磬ͨ?ü???ƾ֤????ʦ???????У?????һ???ߣ?ѧԱ????????Ҳ??һ???ţ???ʱ?????߾͵ò?һ????
//ϵͳ?Զ?????
//??Ҫ?ڱ���?????е?bill.do3,bill.do4֮?䣬????setStudentDrawLineParams????????????˵??
//ֻ??ѧ??ʵѵʱ??ʹ?ã?ֻ?е?type=6??type=7???Ҳ??ǳ?ʼ??ʱ???ڱ?????????Ƭ???????õ??????ж?ʱ????Ч
////////////////////////////////////////////////////////////////////////////
/////////////????????//////////////////////////////////////////////
var _Bill_param_sBoxName,_Bill_param_eBoxName,_Bill_param_kBoxName;
var _Bill_param_sIndex,_Bill_param_eIndex

//?????���ʱʹ?ã?ֻ??????????????Ҫ?ڻ??���ʱ????
//????????
//?????Ķ?????ȷ?????ߵ????????յ㣬??b5,b7
//?ؼ??֣???????һ??Ϊ?գ??͵û????⣩????b2
//?ӵڼ??е??ڼ??У???0,-1??ȫ????0,5????1?е???6?У?Ҳ???Զ?ʡ??
//Ҳ??????һ?????飬??????ƾ֤???ŵģ?Ҫô??0-5??Ҫô??6-11??Ҫô??12-17????ô????Ϊnew Array(0,6,12),new Array(5,11,17)
//???ӣ?
//try{setStudentDrawLineParams("b4","b4","b2");}catch(ex){window.status='setStudentDrawLineparams='+ex.message;}
//try{setStudentDrawLineParams("b4","b4","b2",0,5);}catch(ex){window.status='setStudentDrawLineparams='+ex.message;}
//try{setStudentDrawLineParams("b4","b5","b2",new Array(0,6,12),new Array(5,11,17));}catch(ex){window.status='setStudentDrawLineparams='+ex.message;}
//
//ע?⣬?˺???????????bill.do3,bill.do4֮??
function setStudentDrawLineParams(sBoxName,eBoxName,kBoxName,sIndex,eIndex)
{
    _Bill_param_sBoxName = sBoxName;
    _Bill_param_eBoxName = eBoxName;
    _Bill_param_kBoxName = kBoxName;
    _Bill_param_sIndex = (sIndex)?sIndex:0;
    _Bill_param_eIndex = (eIndex)?eIndex:-1;
}

//???ߺ???????????Ҳ???⹫??????????һ?????????Ƿ???ʼ????????
function draw_line(divId,x1,y1,x2,y2,color,type,isInit)
{
    var linePos = null; 
    try{
        if(_Bill_judgeType_6_7(isInit)){
            linePos = _Bill_GetLinePos();
        }
        else{
            ;
        }
    }
    catch(ex){      
        ;
    }
	 
    if(true || linePos == null){//????Ҫ?Զ????? edit by xiejs at 2009/11/10 ????ʵϰ??????ƽ̨?????Զ?????
        linePos = new Object();
        linePos.x1 = x1;
        linePos.y1 = y1;
        linePos.x2 = x2;
        linePos.y2 = y2;
    }
    else if(!linePos.x1){//????Ҫ????
        return;
    }

    _Bill_draw_line(divId,linePos.x1,linePos.y1,linePos.x2,linePos.y2,color,type);
}

//?ж?type?Ƿ?????6??7??isInit!=1?ĺ?????????true
function _Bill_judgeType_6_7(isInit)
{
    var typeBox = document.getElementsByName("type")[0];
    if(typeBox && (typeBox.value == "6" || typeBox.value == "7") && isInit != "1"){
        return true;
    }
    return false;
}

//?ڲ????? ?õ???????λ??
function _Bill_GetLinePos()
{
    //?????Ķ???ȷ??
    var sBoxName = _Bill_param_sBoxName;
    var eBoxName = _Bill_param_eBoxName;
    //?ؼ??֣???????һ??Ϊ?գ??͵û????⣩
    var kBoxName = _Bill_param_kBoxName;    

    //?ж??Ƿ??????˻??߹???
    if(!kBoxName) return null;

    var kBoxLen = document.getElementsByName(kBoxName).length-1;//?ؼ?????
    //????index
    var temp_sIndex = (!_Bill_param_sIndex) ? 0 : _Bill_param_sIndex;
    var temp_eIndex = (!_Bill_param_eIndex) ? kBoxLen : _Bill_param_eIndex;
    //_Bill_param_sIndex??_Bill_param_eIndex ?????Ǹ????飬ר?????Զ???????ƾ֤
    var sIndexArray = _Bill_BuildArray(temp_sIndex);
    var eIndexArray = _Bill_BuildArray(temp_eIndex);
    
    //?ӵڼ??е??ڼ???
    var sIndex,eIndex;
    var index = -1;
    for(var i=0,len=sIndexArray.length;i<len;i++){
        sIndex = (!sIndexArray[i] || sIndexArray[i] < 0) ? 0 : sIndexArray[i];
        eIndex = (!eIndexArray[i] || eIndexArray[i] < 0) ? kBoxLen : eIndexArray[i];
        //????kBoxName??????λ?ý????????У???0??ʼ??????-1??ʾû???ҵ?????
        index = _Bill_GetEndBoxIndex(kBoxName,sIndex,eIndex);
        if(index >= 0) break;
    }

    //?Ҳ?????????λ??
    if(index == -1) return (new Object());//????Ҫ????

    var linePos = new Object();

    //??ȡsBoxName[eIndex]?????½?????
    var sBox = document.getElementsByName(sBoxName)[eIndex];
    if(!sBox) return null;
    var sBoxPos = _Bill_GetAbsoluteLocation(sBox);
    linePos.x1 = sBoxPos.absoluteLeft;
    linePos.y1 = sBoxPos.absoluteTop + sBoxPos.offsetHeight;

    //??ȡeBoxName[index]?????Ͻ?????
    var eBox = document.getElementsByName(eBoxName)[index];
    if(!eBox) return null;
    var eBoxPos = _Bill_GetAbsoluteLocation(eBox);
    linePos.x2 = eBoxPos.absoluteLeft + eBoxPos.offsetWidth;
    linePos.y2 = eBoxPos.absoluteTop;

    return linePos;
}

//?ڲ?????????????????λ??
function _Bill_GetEndBoxIndex(kBoxName,sIndex,eIndex)
{
    //??kBoxname???б???????????λ??
    var index = -1;
    var kBoxs = document.getElementsByName(kBoxName);
    for(var i=sIndex;i<=eIndex;i++){
        if(!kBoxs[i]) continue;
        var tmpvalue = kBoxs[i].value;//???ǿ?????һ?????ﵽ
        if(tmpvalue.replace(/(^\s*)|(\s*$)/g,"") == ""){
            if(index == -1){
                index = i;
            }
            //break;//???ܼ???һ?䣬??Ϊ???ܴ????м????е?????
        }
        else{//???в??յ???
            index = -1;
        }
    }
    return index;
}

//?ڲ???????????????,arg?????????飬Ҳ?????Ǹ????ֻ??ַ?????
//??????ǰ??ԭ?????أ??????Ǻ??߹????ɳ???Ϊ1?????飬??ֵΪ???η???
function _Bill_BuildArray(arg)
{
    if(_Bill_param_sIndex instanceof Array){
        return arg;
    }
    else{
        var retus = new Array();
        retus[0] = arg;
        return retus;
    }
}

//?ڲ????? 
function _Bill_AbsolutePos()
{ 
    //????????λ?õ? ???? 
    this.absoluteTop = 0;
    this.absoluteLeft = 0;
    this.offsetWidth = 0;
    this.offsetHeight = 0;
}
//?ڲ????? 
function _Bill_GetAbsoluteLocation(element) 
{  
    //????????λ?ã????ض??? _Bill_AbsolutePos ,  20080312 test ok 
    var obj = new _Bill_AbsolutePos();
    if ( arguments.length != 1 || element == null ) { 
        return obj; 
    } 

    var elmt = element; 
    obj.absoluteTop    = elmt.offsetTop; 
    obj.absoluteLeft   = elmt.offsetLeft; 
    obj.offsetWidth    = elmt.offsetWidth; 
    obj.offsetHeight   = elmt.offsetHeight; 

    while( elmt = elmt.offsetParent ) { 
        // add this judge 
        if ( elmt.style.position == 'absolute' || elmt.style.position == 'relative'  
                || ( elmt.style.overflow != 'visible' && elmt.style.overflow != '' ) ) { 
            break; 
        }  
        obj.absoluteTop  += elmt.offsetTop; 
        obj.absoluteLeft += elmt.offsetLeft; 
    } 
    return obj;
}
////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////?Զ????߽???////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////




/**
 * ??ת????
 * 2009-10-13
 * @param oObj ??Ҫ??ת?Ķ???
 * @param deg ??ת?ĽǶ?0~360
 * @return
 */
function fnSetRotation(oObj, deg) {	
	var deg2radians = Math.PI * 2 / 360;
	// for firefox, safari, chrome, etc.
	if (oObj.style.webkitTransform) {
		oObj.style.webkitTransform = "rotate(" + deg + "deg)";
	}	
	if (oObj.style.MozTransform) {		
		oObj.style.MozTransform = "rotate(" + deg + "deg)";
	}
	oObj.style["-webkit-transform"] = "rotate(" + deg + "deg)";	
	oObj.style["webkitTransform"] = "rotate(" + deg + "deg)";	
	oObj.style["-moz-transform"] = "rotate(" + deg + "deg)";
	oObj.style["MozTransform"] = "rotate(" + deg + "deg)";
	oObj.style["transform"] = "rotate(" + deg + "deg)";

	// for IE
	rad = deg * deg2radians;
	costheta = Math.cos(rad);
	sintheta = Math.sin(rad);
	if (oObj.filters) {
		oObj.filters.item(0).M11 = costheta;
		oObj.filters.item(0).M12 = -sintheta;
		oObj.filters.item(0).M21 = sintheta;
		oObj.filters.item(0).M22 = costheta;
	}
}
