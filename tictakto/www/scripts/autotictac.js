	var inputColor;
 (function ak()
		 {
			inputColor = prompt("Enter a your color name");
		 }())
var count = 0;
var x1 = false,x2 = false,x3 = false,x4 = false,x5 = false,x6 = false,x7 = false,x8 = false,x9 = false;
var y1 = false,y2 = false,y3 = false,y4 = false,y5 = false,y6 = false,y7 = false,y8 = false,y9 = false;
var v1 = false,  v2 =false,v3 =false;
function myFunction() //button function for chaging the colour of the button
{
        document.getElementById("a").style.background=inputColor;
		document.getElementById("a").innerHTML="X";
        x1 = true; 
    //y1=true;
       document.getElementById("a").disabled= true;
    count++;
    if (count==1)
    {
         document.getElementById("e").style.background='gold';
               document.getElementById("e").innerHTML="O";
          document.getElementById("e").disabled= true;
          //compare();
              //count++;
           y5 = true;
    }
        //autorandom(); // setTimeout(function() { autorandom(); }, 1000);
   if(count>=2)
    {
        analyz();
    }
    // compare();//compares for combinations
}
function myFunction1()
{
        document.getElementById("b").style.background=inputColor;
    document.getElementById("b").innerHTML="X";
        x2 = true;
   //y2==true;
        document.getElementById("b").disabled= true;
             count++;
    if (count==1)
        {
         document.getElementById("e").style.background='gold';
               document.getElementById("e").innerHTML="O";
          document.getElementById("e").disabled= true;
          //compare();
              //count++;
           y5 = true;
    }
       //autorandom(); // setTimeout(function() { autorandom(); }, 1000);
   if(count>=2)
    {
        analyz();
    }
   // compare();
}
  
function myFunction2()
{
        document.getElementById("c").style.background=inputColor;
    document.getElementById("c").innerHTML="X";
        x3 = true;
   
        document.getElementById("c").disabled= true;
          count++;
    if (count==1)
        {
         document.getElementById("e").style.background='gold';
               document.getElementById("e").innerHTML="O";
          document.getElementById("e").disabled= true;
          //compare();
              //count++;
           y5 = true;
    }
       //autorandom(); // setTimeout(function() { autorandom(); }, 1000);
     if(count>=2)
    {
        analyz();
    }
     //compare();
}
  
function myFunction3()
{
      document.getElementById("d").style.background=inputColor;
    document.getElementById("d").innerHTML="X";
        x4 = true;
           document.getElementById("d").disabled= true;
         count++;
    if (count==1)
        {
         document.getElementById("e").style.background='gold';
               document.getElementById("e").innerHTML="O";
          document.getElementById("e").disabled= true;
          //compare();
              //count++;
           //y5 = true;
    }
       //autorandom(); // setTimeout(function() { autorandom(); }, 1000);
     if(count>=2)
    {
        analyz();
    }
    // compare();
}
  
function myFunction4()
{
   document.getElementById("e").style.background=inputColor;
    document.getElementById("e").innerHTML="X";
        x5 = true;
    
        document.getElementById("e").disabled= true;
         count++;
     if (count==1)
         autorandom(); // setTimeout(function() { autorandom(); }, 1000);
    if(count>=2)
    {
        analyz();
    }
     //compare();
}
  
function myFunction5()
{
    document.getElementById("f").style.background=inputColor;
    document.getElementById("f").innerHTML="X";
        x6 = true;
        document.getElementById("f").disabled= true;
           count++;
     if (count==1 )
         {
         document.getElementById("e").style.background='gold';
               document.getElementById("e").innerHTML="O";
          document.getElementById("e").disabled= true;
          //compare();
              //count++;
          // y5 = true;
    }
       //autorandom(); // setTimeout(function() { autorandom(); }, 1000);
    if(count>=2)
    {
        analyz();
    }
    // compare();
}
  
function myFunction6()
{
     document.getElementById("g").style.background=inputColor;
    document.getElementById("g").innerHTML="X";
        x7 = true;
    
        document.getElementById("g").disabled= true;
        count++;
     if (count==1)
         {
         document.getElementById("e").style.background='gold';
               document.getElementById("e").innerHTML="O";
          document.getElementById("e").disabled= true;
          //compare();
              //count++;
           y5 = true;
    }
       //autorandom(); // setTimeout(function() { autorandom(); }, 1000);
   if(count>=2)
    {
        analyz();
    }
}
  
function myFunction7()
{
    document.getElementById("h").style.background=inputColor;
    document.getElementById("h").innerHTML="X";
        x8 = true;
    
        document.getElementById("h").disabled= true;
        compare();
       count++;
     if (count==1)
         {
         document.getElementById("e").style.background='gold';
               document.getElementById("e").innerHTML="O";
          document.getElementById("e").disabled= true;
          //compare();
              //count++;
           y5 = true;
    }
      // autorandom(); // setTimeout(function() { autorandom(); }, 1000);
    if(count>=2)
    {
        analyz();
    }
     //compare();
}
function myFunction8()
{
        document.getElementById("i").style.background=inputColor;
    document.getElementById("i").innerHTML="X";
        x9 = true;
    
        document.getElementById("i").disabled= true;
       count++;
     if (count==1)
         {
         document.getElementById("e").style.background='gold';
               document.getElementById("e").innerHTML="O";
          document.getElementById("e").disabled= true;
          //compare();
              //count++;
           y5 = true;
    }
       //autorandom(); // setTimeout(function() { autorandom(); }, 1000);
    if(count>=2)
    {
        analyz();
    }
        
}

function smart()//for making the cpmuter smart
{
    
   if((x1==x2 &&x2==true&&x3==false&&document.getElementById("c").disabled==false)||(x6==x9&&x9==true&&x3==false&&  document.getElementById("c").disabled==false)||(x5==x7 && x7==true&&x3==false&&document.getElementById("c").disabled==false))
   {
          
       document.getElementById("c").style.background='gold';
               document.getElementById("c").innerHTML="O";
          document.getElementById("c").disabled= true;
       //count++;
       y3==true;
       
       
   }
  
   else if((x2==x3&&x3==true&&x1==false&&  document.getElementById("a").disabled==false)||(x4==x7&&x7==true&&x1==false&&          document.getElementById("a").disabled==false)||(x5==x9&&x9==true&&x1==false&&          document.getElementById("a").disabled==false))
    {       
        
        document.getElementById("a").style.background='gold';
               document.getElementById("a").innerHTML="O";
          document.getElementById("a").disabled= true;
        //count++;
        y1==true;
       
    }
  
    else if((x1==x3 && x3==true&&x2==false&&          document.getElementById("b").disabled==false)||(x5==x8 &&x8==true&&x2==false&&          document.getElementById("b").disabled==false))
    {
       
        
        document.getElementById("b").style.background='gold';
               document.getElementById("b").innerHTML="O";
          document.getElementById("b").disabled= true;
        //count++;
        y2=true;
       
    }
      
    else if((x4==x5&&x5==true&&x6==false&& document.getElementById("f").disabled==false)||(x3==x9&&x9==true&&x6==false&& document.getElementById("f").disabled==false))
    {
        
        document.getElementById("f").style.background='gold';
               document.getElementById("f").innerHTML="O";
          document.getElementById("f").disabled= true;
        //count++;
        y6=true;
    }
  
    else if((x5==x6&&x6==true&&x4==false&& document.getElementById("d").disabled==false)||(x1==x7&&x7==true&&x4==false&& document.getElementById("d").disabled==false))
    {
        
        document.getElementById("d").style.background='gold';
               document.getElementById("d").innerHTML="O";
          document.getElementById("d").disabled= true;
        //count++;
        y4=true;
    }
   
     else if((x4==x6&&x6==true&&x5==false&&          document.getElementById("e").disabled==false)||(x2==x8&&x8==true&&x5==false&&          document.getElementById("e").disabled==false)||(x1==x9&&x9==true&&x5==false&&document.getElementById("e").disabled==false)||(x3==x7&&x7==true&&x5==false&&document.getElementById("e").disabled==false))
    {
        
        document.getElementById("e").style.background='gold';
               document.getElementById("e").innerHTML="O";
          document.getElementById("e").disabled= true;
        //count++;
        y5=true;
    }

      else if((x7==x8&&x8==true&&x9==false&&         document.getElementById("i").disabled==false)||(x3==x6&&x6==true&&x9==false&&          document.getElementById("i").disabled==false)||(x1==x5&&x5==true&&x9==false&&          document.getElementById("i").disabled==false))
    {
        
        document.getElementById("i").style.background='gold';
               document.getElementById("i").innerHTML="O";
          document.getElementById("i").disabled= true;
        //count++;
        y9=true;
    }
 
     else if((x8==x9&&x9==true&&x7==false&&          document.getElementById("g").disabled==false)||(x1==x4&&x4==true&&x7==false&&          document.getElementById("g").disabled==false)||(x3==x5&&x5==true&&x7==false&&          document.getElementById("g").disabled==false))
    {
         
        document.getElementById("g").style.background='gold';
               document.getElementById("g").innerHTML="O";
          document.getElementById("g").disabled= true;
        //count++;
        y7=true;
    }
   
      else if((x7==x9&&x9==true&&x8==false&&          document.getElementById("h").disabled==false)||(x2==x5&&x5==true&&x8==false&&          document.getElementById("h").disabled==false))
    {
         
        document.getElementById("h").style.background='gold';
               document.getElementById("h").innerHTML="O";
          document.getElementById("h").disabled= true;
        //count++;
        y8=true;
    }
    else
    {
    smart2();   // autorandom();
    }
  
     compare();
}
function analyz()
{
  // alert(y1);
    //alert(y5);
    //alert(y3);
  if ( v1 == false && v2 == false &&v3==false)
  {
     if((y1==y2&&y2==true&&x3==false&&document.getElementById("c").disabled==false)||(y6==y9&&y9==true&&x3==false&&  document.getElementById("c").disabled==false)||  (y5==y7 && y7==true&&x3==false&&document.getElementById("c").disabled==false))
   {
          y3=true;
       smart2();
       
   }
  
   else if((y2==y3&&y3==true&&x1==false&&  document.getElementById("a").disabled==false)||(y4==y7&&y7==true&&x1==false&&          document.getElementById("a").disabled==false)||(y5==y9&&y9==true&&x1==false&&          document.getElementById("a").disabled==false))
    {       
        y1=true;
        smart2();
       
    }
  
    else if((y1==y3 && y3==true&&x2==false&&          document.getElementById("b").disabled==false)||(y5==y8 &&y8==true&&x2==false&&          document.getElementById("b").disabled==false))
    {
       
        y2=true;
       smart2();
       
    }
      
    else if((y4==y5&&y5==true&&x6==false&& document.getElementById("f").disabled==false)||(y3==y9&&y9==true&&x6==false&& document.getElementById("f").disabled==false))
    {
        y6=true;
        smart2();
    }
  
    else if((y5==y6&&y6==true&&x4==false&& document.getElementById("d").disabled==false)||(y1==y7&&y7==true&&x4==false&& document.getElementById("d").disabled==false))
    {
        y4=true;
        smart2();
    }
   
     else if((y4==y6&&y6==true&&x5==false&&          document.getElementById("e").disabled==false)||(y2==y8&&y8==true&&x5==false&&          document.getElementById("e").disabled==false)||(y1==y9&&y9==true&&x5==false&&document.getElementById("e").disabled==false)||(y3==y7&&y7==true&&x5==false&&document.getElementById("e").disabled==false))
    {
        y5=true;
        smart2();
    }

      else if((y7==y8&&y8==true&&x9==false&&         document.getElementById("i").disabled==false)||(y3==y6&&y6==true&&x9==false&&          document.getElementById("i").disabled==false)||(y1==y5&&y5==true&&x9==false&&          document.getElementById("i").disabled==false))
    {
        y9=true;
        smart2();
    }
 
     else if((y8==y9&&y9==true&&x7==false&&          document.getElementById("g").disabled==false)||(y1==y4&&y4==true&&x7==false&&          document.getElementById("g").disabled==false)||(y3==y5&&y5==true&&x7==false&&          document.getElementById("g").disabled==false))
    {
         y7=true;
       smart2();
    }
   
      else if((y7==y9&&y9==true&&x8==false&&          document.getElementById("h").disabled==false)||(y2==y5&&y5==true&&x8==false&&          document.getElementById("h").disabled==false))
    {
        y8=true;
       smart2();
    }
    else if((x1==x2 &&x2==true&&x3==false&&document.getElementById("c").disabled==false)||(x6==x9&&x9==true&&x3==false&&  document.getElementById("c").disabled==false)||(x5==x7 && x7==true&&x3==false&&document.getElementById("c").disabled==false))
   {
          y3=true;
       smart();
       
       
   }
  
   else if((x2==x3&&x3==true&&x1==false&&  document.getElementById("a").disabled==false)||(x4==x7&&x7==true&&x1==false&&          document.getElementById("a").disabled==false)||(x5==x9&&x9==true&&x1==false&&          document.getElementById("a").disabled==false))
    {       
        y1=true;
        smart();
       
    }
  
    else if((x1==x3 && x3==true&&x2==false&&          document.getElementById("b").disabled==false)||(x5==x8 &&x8==true&&x2==false&&          document.getElementById("b").disabled==false))
    {
       
        y2=true;
        smart();
       
    }
      
    else if((x4==x5&&x5==true&&x6==false&& document.getElementById("f").disabled==false)||(x3==x9&&x9==true&&x6==false&& document.getElementById("f").disabled==false))
    {
        y6=true;
        smart();
    }
  
    else if((x5==x6&&x6==true&&x4==false&& document.getElementById("d").disabled==false)||(x1==x7&&x7==true&&x4==false&& document.getElementById("d").disabled==false))
    {
        y4=true;
        smart();
    }
   
     else if((x4==x6&&x6==true&&x5==false&&          document.getElementById("e").disabled==false)||(x2==x8&&x8==true&&x5==false&&          document.getElementById("e").disabled==false)||(x1==x9&&x9==true&&x5==false&&document.getElementById("e").disabled==false)||(x3==x7&&x7==true&&x5==false&&document.getElementById("e").disabled==false))
    {
        y5=true;
        smart();
    }

      else if((x7==x8&&x8==true&&x9==false&&         document.getElementById("i").disabled==false)||(x3==x6&&x6==true&&x9==false&&          document.getElementById("i").disabled==false)||(x1==x5&&x5==true&&x9==false&&          document.getElementById("i").disabled==false))
    {
        y9=true;
        smart();
    }
 
     else if((x8==x9&&x9==true&&x7==false&&          document.getElementById("g").disabled==false)||(x1==x4&&x4==true&&x7==false&&          document.getElementById("g").disabled==false)||(x3==x5&&x5==true&&x7==false&&          document.getElementById("g").disabled==false))
    {
         y7=true;
        smart();
    }
   
      else if((x7==x9&&x9==true&&x8==false&&          document.getElementById("h").disabled==false)||(x2==x5&&x5==true&&x8==false&&          document.getElementById("h").disabled==false))
    {
         y8=true;
        smart();
    } 
    else{
        autorandom();
    }
  }
     if (v1 == false && v2 == false &&v3==false)
    {
  compare();
        //draw();
    }
}
function smart2()
 
{
   // alert("check");
    
   if((y1==y2 &&y2==true&&x3==false&&document.getElementById("c").disabled==false)||(y6==y9&&y9==true&&x3==false&&  document.getElementById("c").disabled==false)||(y5==y7 && y7==true&&x3==false&&document.getElementById("c").disabled==false))
   {
          
       document.getElementById("c").style.background='gold';
               document.getElementById("c").innerHTML="O";
          document.getElementById("c").disabled= true;
       //count++;
       y3==true;
       
       
   }
  
   else if((y2==y3&&y3==true&&x1==false&&  document.getElementById("a").disabled==false)||(y4==y7&&y7==true&&x1==false&&          document.getElementById("a").disabled==false)||(y5==y9&&y9==true&&x1==false&&          document.getElementById("a").disabled==false))
    {       
        
        document.getElementById("a").style.background='gold';
               document.getElementById("a").innerHTML="O";
          document.getElementById("a").disabled= true;
        //count++;
        y1==true;
       
    }
  
    else if((y1==y3 && y3==true&&x2==false&&          document.getElementById("b").disabled==false)||(y5==y8 &&y8==true&&x2==false&&          document.getElementById("b").disabled==false))
    {
       
        
        document.getElementById("b").style.background='gold';
               document.getElementById("b").innerHTML="O";
          document.getElementById("b").disabled= true;
        //count++;
        y2=true;
       
    }
      
    else if((y4==y5&&y5==true&&x6==false&& document.getElementById("f").disabled==false)||(y3==y9&&y9==true&&x6==false&& document.getElementById("f").disabled==false))
    {
        
        document.getElementById("f").style.background='gold';
               document.getElementById("f").innerHTML="O";
          document.getElementById("f").disabled= true;
        //count++;
        y6=true;
    }
  
    else if((y5==y6&&y6==true&&x4==false&& document.getElementById("d").disabled==false)||(y1==y7&&y7==true&&x4==false&& document.getElementById("d").disabled==false))
    {
        
        document.getElementById("d").style.background='gold';
               document.getElementById("d").innerHTML="O";
          document.getElementById("d").disabled= true;
        //count++;
        y4=true;
    }
   
     else if((y4==y6&&y6==true&&x5==false&&          document.getElementById("e").disabled==false)||(y2==y8&&y8==true&&x5==false&&          document.getElementById("e").disabled==false)||(y1==y9&&y9==true&&x5==false&&document.getElementById("e").disabled==false)||(y3==y7&&y7==true&&x5==false&&document.getElementById("e").disabled==false))
    {
        
        document.getElementById("e").style.background='gold';
               document.getElementById("e").innerHTML="O";
          document.getElementById("e").disabled= true;
        //count++;
        y5=true;
    }

      else if((y7==y8&&y8==true&&x9==false&&         document.getElementById("i").disabled==false)||(y3==y6&&y6==true&&x9==false&&          document.getElementById("i").disabled==false)||(y1==y5&&y5==true&&x9==false&&          document.getElementById("i").disabled==false))
    {
        
        document.getElementById("i").style.background='gold';
               document.getElementById("i").innerHTML="O";
          document.getElementById("i").disabled= true;
        //count++;
        y9=true;
    }
 
     else if((y8==y9&&y9==true&&x7==false&&          document.getElementById("g").disabled==false)||(y1==y4&&y4==true&&x7==false&&          document.getElementById("g").disabled==false)||(y3==y5&&y5==true&&x7==false&&          document.getElementById("g").disabled==false))
    {
         
        document.getElementById("g").style.background='gold';
               document.getElementById("g").innerHTML="O";
          document.getElementById("g").disabled= true;
        //count++;
        y7=true;
    }
   
      else if((y7==y9&&y9==true&&x8==false&&          document.getElementById("h").disabled==false)||(y2==y5&&y5==true&&x8==false&&          document.getElementById("h").disabled==false))
    {
         
        document.getElementById("h").style.background='gold';
               document.getElementById("h").innerHTML="O";
          document.getElementById("h").disabled= true;
        //count++;
        y8=true;
    }
    else
    {
        autorandom();
    }
  
     compare();
    
}
    
    
/*function smart1()

{
alert("check");      if((document.getElementById("a").style.background=='gold'&&document.getElementById("b").style.background=='gold'&&x3==false&&document.getElementById("c").disabled==false)||(document.getElementById("f").style.background=='gold'&&document.getElementById("i").style.background=='gold'&&x3==false&&  bdocument.getElementById("c").disabled==false)||(document.getElementById("e").style.background=='gold'&&document.getElementById("g").style.background=='gold'&&x3==false&&document.getElementById("c").disabled==false))
    {
         alert("3");
         document.getElementById("c").style.background='gold';
               document.getElementById("c").innerHTML="O";
          document.getElementById("c").disabled= true;
        //count++;
       y3==true;
       
    }
     else if((document.getElementById("b").style.background=='gold'&&document.getElementById("c").style.background=='gold'&&x1==false&&  document.getElementById("a").disabled==false)||(document.getElementById("d").style.background=='gold'&&document.getElementById("g").style.background=='gold'&&x1==false&&document.getElementById("a").disabled==false)||(document.getElementById("e").style.background=='gold'&&document.getElementById("i").style.background=='gold'&&x1==false&&document.getElementById("a").disabled==false))
     {
          alert("1");
         document.getElementById("a").style.background='gold';
               document.getElementById("a").innerHTML="O";
          document.getElementById("a").disabled= true;
         //count++;
        y1==true;
       
     }
    else if((document.getElementById("a").style.background=='gold'&&document.getElementById("c").style.background=='gold'&&x2==false&&document.getElementById("b").disabled==false)||(document.getElementById("h").style.background=='gold'&&document.getElementById("e").style.background=='gold'&&x2==false&&document.getElementById("b").disabled==false))
    {
          alert("2");
        document.getElementById("b").style.background='gold';
               document.getElementById("b").innerHTML="O";
          document.getElementById("b").disabled= true;
        //count++;
        y2=true;
    }
    
    else if((document.getElementById("d").style.background=='gold'&&document.getElementById("e").style.background=='gold'&&x6==false&& document.getElementById("f").disabled==false)||(document.getElementById("c").style.background=='gold'&&document.getElementById("i").style.background=='gold'&&x6==false&& document.getElementById("f").disabled==false))
    {
         alert("6");
         document.getElementById("f").style.background='gold';
               document.getElementById("f").innerHTML="O";
          document.getElementById("f").disabled= true;
        //count++;
        y6=true;
    }
    else if((document.getElementById("e").style.background=='gold'&&document.getElementById("f").style.background=='gold'&&x4==false&& document.getElementById("d").disabled==false)||(document.getElementById("a").style.background=='gold'&&document.getElementById("g").style.background=='gold'&&x4==false&& document.getElementById("d").disabled==false))
    {
         alert("4");
        document.getElementById("d").style.background='gold';
               document.getElementById("d").innerHTML="O";
          document.getElementById("d").disabled= true;
        //count++;
        y4=true;
    }
     else if((document.getElementById("d").style.background=='gold'&&document.getElementById("f").style.background=='gold'&&x5==false&&document.getElementById("e").disabled==false)||(document.getElementById("b").style.background=='gold'&&document.getElementById("h").style.background=='gold'&&y5==false&&document.getElementById("e").disabled==false)||(document.getElementById("a").style.background=='gold'&&document.getElementById("i").style.background=='gold'&&x5==false&&document.getElementById("e").disabled==false)||(document.getElementById("c").style.background=='gold'&&document.getElementById("g").style.background=='gold'&&x5==false&&document.getElementById("e").disabled==false))
    {
         alert("5");
        document.getElementById("e").style.background='gold';
               document.getElementById("e").innerHTML="O";
          document.getElementById("e").disabled= true;
        //count++;
        y5=true;
    }
     else if((document.getElementById("g").style.background=='gold'&&document.getElementById("h").style.background=='gold'&&x9==false&& document.getElementById("i").disabled==false)||(document.getElementById("c").style.background=='gold'&&document.getElementById("f").style.background=='gold'&&x9==false&&document.getElementById("i").disabled==false)||(document.getElementById("a").style.background=='gold'&&document.getElementById("e").style.background=='gold'&&x9==false&& document.getElementById("i").disabled==false))
    {
         alert("9");
        document.getElementById("i").style.background='gold';
               document.getElementById("i").innerHTML="O";
          document.getElementById("i").disabled= true;
        //count++;
        y9=true;
    }
     else if((document.getElementById("h").style.background=='gold'&&document.getElementById("i").style.background=='gold'&&x7==false&&document.getElementById("g").disabled==false)||(document.getElementById("a").style.background=='gold'&&document.getElementById("d").style.background=='gold'&&x7==false&&document.getElementById("g").disabled==false)||(document.getElementById("c").style.background=='gold'&&document.getElementById("e").style.background=='gold'&&x7==false&&document.getElementById("g").disabled==false))
    {
         alert("7");
          document.getElementById("g").style.background='gold';
               document.getElementById("g").innerHTML="O";
          document.getElementById("g").disabled= true;
        //count++;
        y7=true;
    }
     else if((document.getElementById("g").style.background=='gold'&&document.getElementById("i").style.background=='gold'&&x8==false&&document.getElementById("h").disabled==false)||(document.getElementById("b").style.background=='gold'&&document.getElementById("e").style.background=='gold'&&x8==false&&document.getElementById("h").disabled==false))
    {
        alert("8");
        document.getElementById("h").style.background='gold';
               document.getElementById("h").innerHTML="O";
          document.getElementById("h").disabled= true;
        //count++;
        y8=true;
    }
     else
    {
        autorandom();
    }
  
     compare();
        
}*/

function disabling()
{
    document.getElementById("a").disabled = true;
    document.getElementById("b").disabled = true;
    document.getElementById("c").disabled = true;
    document.getElementById("d").disabled = true;
    document.getElementById("e").disabled = true;
    document.getElementById("f").disabled = true;
    document.getElementById("g").disabled = true;
    document.getElementById("h").disabled = true;
    document.getElementById("i").disabled = true;
}
function compare()  //comparing if the buttons have the same colour(value) using boolean logic
{ 
 if(((x5 == x1 && x1 == x9 && x9 == true) || (x5 == x3 && x3 == x7 && x7 == true) || (x5 == x4 && x4 == x6 && x6 == true) || (x5 == x2 && x2 == x8 && x8 == true)) || ((x1 == x2 && x2== x3 && x3 == true) || (x1 == x4 && x4 == x7 && x7 == true)) || ((x9 == x8 && x8 == x7 && x7 == true) || (x9 == x6 && x6 == x3 && x3 == true)))
       {
            alert(" Player1 wins");
            playagain()
            disabling();
            v1 = true;
          
       }
    else if((y1 == y2 && y2 == y3 && y3==true) || (y1 == y4 && y4 == y7 && y7==true) || (y1 == y5 && y5 == y9 && y9==true) || (y2 == y5 && y5 == y8 && y8==true) || (y3 == y6 && y6 == y9  && y9==true) || (y3 == y5 && y5 == y7  && y7==true) || (y4 == y6 && y6 == y5 && y5==true) || (y7 == y8 && y8 == y9 && y7==true)) 
       {
            alert(" Internet Win!!!");
           playagain();
           disabling();
            v2 = true;
           
       }
    else if (v1 == v2 && v2 == false &&v3==false)
    {
        draw();
    }
   
}

   function draw()
    {
       // alert("khan");
       if(((x5 == x1 && x1 == y9 && y9 == true) || (x5 == x9 && x9 == y1 && y1 == true) || (x1==x9 && x9== y5 && y5==true)||(y5 == y1 && y1 == x9 && x9 == true) || (y5 == y9 && y9 == x1 && x1 == true) || (y1==y9 && y9== x5 && x5==true)) && ((x5 == x3 && x3==y7&&y7==true)||(x3 == x7 && x7==y5&& y5 == true)||(x5 == x7 && x7==y3 && y3==true)||(y5 == y3 && y3==x7&&x7==true)||(y3 == y7 && y7==x5&& x5 == true)||(y5 == y7 && y7==x3 && x3==true))&& ((x5 == x4 && x4 == y6 && y6 == true) || (x5 == x6 && x6 == y4 && y4 == true) || (x4 == x6 && x6 == y5 && y5 == true)||(y5 == y4 && y4 == x6 && x6 == true) || (y5 == y6 && y6 == x4 && x4 == true) || (y4 == y6 && y6 == x5 && x5 == true)) && ((x5 == x2 && x2 == y8 && y8 == true) || (x5 == x8 && x8 == y2 && y2 == true) || (x2 == x8 && x8 == y5 && y5 == true)||(y5 == y2 && y2 == x8 && x8 == true) || (y5 == y8 && y8 == x2 && x2 == true) || (y2 == y8 && y8 == x5 && x5 == true)) && ((x1 == x2 && x2== y3 && y3 == true) || (x2==x3 && x3 == y1 && y1==true)||(x1==x3 && x3 == y2 && y2 == true)||(y1 == y2 && y2== x3 && x3 == true) || (y2==y3 && y3 == x1 && x1==true)||(y1==y3 && y3 == x2 && x2 == true)) && ((x1 == x4 && x4 == y7 && y7 == true) || (x4 == x7 && x7 == y1 && y1 == true) || (x1 == x7 && x7 == y4 && y4 == true)||(y1 == y4 && y4 == x7 && x7 == true) || (y4 == y7 && y7 == x1 && x1 == true) || (y1 == y7 && y7 == x4 && x4 == true)) && ((x9 == x8 && x8 == y7 && y7 == true) || (x7 == x8 && x8 == y9 && y9== true) || (x7 == x9 && x9 == y8 && y8 == true)||(y9 == y8 && y8 == x7 && x7 == true) || (y7 == y8 && y8 == x9 && x9== true) || (y7 == y9 && y9 == x8 && x8 == true)) && ((x9 == x6 && x6 == y3 && y3 == true)|| (x3 == x6 && x6 == y9 && y9 == true) || (x3 == x9 && x9 == y6 && y6 == true)||(y9 == y6 && y6 == x3 && x3 == true)|| (y3 == y6 && y6 == x9 && x9 == true) || (y3 == y9 && y9 == x6 && x6 == true)))
       {
           alert("draw");
           playagain();
            v3 = true;
       }
    }

    function playagain() //function for linking whether u wanna play again or not
    {
        document.getElementById("qs").innerHTML="Do you want to play again??";
        var a = document.createElement('a');
        var linkText = document.createTextNode("Yes");
        a.appendChild(linkText);
        a.style.color="green";
        a.style.fontSize= "25px";
        a.style.paddingLeft ="40%";
        a.style.textDecoration = "none";
        a.href = "/index.html";
        document.body.appendChild(a);  
    
        
       // var a = document.createElement('a');
        //var linkText = document.createTextNode("No");
        //a.appendChild(linkText);
        //a.style.color="green";
        //a.style.fontSize= "25px";
        //a.style.paddingLeft ="35%";
        //a.style.textDecoration = "none";
        //a.href = "file:///D:/d%20backup/Desktop/final%20tictac/about.html";
        //document.body.appendChild(a);
        }


function autorandom()
{ 
    compare();
   // draw();
    if ( v1 == false && v2 == false) //this is done so that the computer dosent play even after the player wins
    {
        var a1 = 0;
   a1 = Math.random();
    //alert(a1);
        if(a1 < 0.11)
      {
          if(x1 == false &&y1==false)//checking if the buttons are npt colored
          {
          document.getElementById("a").style.background='gold';
              document.getElementById("a").innerHTML="O";
          document.getElementById("a").disabled= true;
          //compare(); 
             // count++;
           y1 = true;
            //  alert("zero");
          }
          else if(x1== true|| y1==true) //checkink for both blue and red colour 
          {
              autorandom();
          }
         
      }
    else if(a1 < 0.22 &&a1>0.11)
      {
          
          //alert(x2);
          if(x2 == false &&y2==false)
          {
          document.getElementById("b").style.background='gold';
               document.getElementById("b").innerHTML="O";
          document.getElementById("b").disabled= true;
          //compare();
             // count++;
           y2 = true;
           //   alert("frst");
          }
          else if(x2 == true || y2==true)
          {
               
              autorandom();
          }
      }
       else if(a1 < 0.33 && a1 > 0.22)
       {
         if(x3 == false &&y3==false)
          {
          document.getElementById("c").style.background='gold';
               document.getElementById("c").innerHTML="O";
          document.getElementById("c").disabled= true;
          //compare();
             // count++;
           y3 = true;
            //  alert("sec");
          }
          else if(x3 == true || y3==true)
          {
               
              autorandom();
          }
       }
     else if(a1 < 0.44 && a1 > 0.33)
       {
         if(x4 == false &&y4==false)
          {
          document.getElementById("d").style.background='gold';
               document.getElementById("d").innerHTML="O";
          document.getElementById("d").disabled= true;
         // compare();
             // count++;
           y4 = true;
            //  alert("thi");
          }
          else if(x4 == true || y4==true)
          {
               
              autorandom();
          }
       }
     else if(a1 < 0.55 && a1 > 0.44)
       {
        if(x5 == false &&y5==false)
          {
          document.getElementById("e").style.background='gold';
               document.getElementById("e").innerHTML="O";
          document.getElementById("e").disabled= true;
          //compare();
              //count++;
           y5 = true;
           //   alert("four");
          }
          else if(x5 == true || y5==true)
          {
               
              autorandom();
          }
       }
     else if(a1 < 0.66 && a1 > 0.55)
       {
        if(x6 == false &&y6==false)
          {
          document.getElementById("f").style.background='gold';
               document.getElementById("f").innerHTML="O";
          document.getElementById("f").disabled= true;
          //compare();
              //count++;
           y6 = true;
          //    alert("fiv");
          }
          else if(x6 == true || y6==true)
          {
              
              autorandom();
          }
       }
     else if(a1 < 0.77 && a1 > 0.66)
       {
        if(x7 == false &&y7==false)
          {
          document.getElementById("g").style.background='gold';
               document.getElementById("g").innerHTML="O";
          document.getElementById("g").disabled= true;
         // compare();
             // count++;
           y7 = true;
           //   alert("six");
          }
          else if(x7 == true || y7==true)
          {
              
              autorandom();
          }
       }
     else if(a1 < 0.88 && a1 > 0.77)
       {
           
        if(x8 == false &&y8==false)
          {
          document.getElementById("h").style.background='gold';
               document.getElementById("h").innerHTML="O";
          document.getElementById("h").disabled= true;
         // compare();
             // count++;
           y8 = true;
           //   alert("sev");
          }
          else if(x8 == true || y8==true)
          {
             
              autorandom();
          }
       }
     else if(a1 > 0.88)
       {
        if(x9 == false &&y9==false)
          {
			document.getElementById("i").style.background='gold';
            document.getElementById("i").innerHTML="O";
			document.getElementById("i").disabled= true;
          //compare();
             // count++;
           y9 = true;
            //  alert("eig");
          }
          else if(x9 == true || y9==true)
          {
              autorandom();
          }
       }
    }
    if (v1 == false && v2 == false)
    {
		compare();
        //draw();
    }
}
