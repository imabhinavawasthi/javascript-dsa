var intToRoman = function(num) {
    var mpp={}
    mpp[1]="I"
    mpp[5]="V"
    mpp[10]="X"
    mpp[50]="L"
    mpp[100]="C"
    mpp[500]="D"
    mpp[1000]="M"
        var s="";
        for(let i=1000;i>0;i=Math.floor(i/10))
        {
            if(i==1000)
            {
                let x=Math.floor(num/1000);
                num%=1000;
                for(let j=0;j<x;j++)
                s+="M";
            }
            else 
            {
                let x=Math.floor(num/i);
                num%=i;
                if(x==0)continue;
                else if(x<4)
                {
                    for(let j=0;j<x;j++)
                    s+=mpp[i];
                }
                else if(x==4) {
                    s+=mpp[i];
                    s+=mpp[5*i];
                }
                else if(x==5)s+=mpp[5*i];
                else if(x<9)
                {
                    s+=mpp[5*i];
                    x-=5;
                    for(let j=0;j<x;j++)
                    s+=mpp[i];
                }
                else if(x==9) {
                    s+=mpp[i];
                    s+=mpp[10*i];
                }
            }
        }
        return s;

};