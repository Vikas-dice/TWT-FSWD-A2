


function test(cbfn){
    cbfn();

}

test(function testing1(){
    console.log("testing 1")
    test((function testing2(){
        console.log("testing2")

        test((function testing3(){
            console.log("testing3")
            test((function testing4(){
                console.log("testing 4")

                test((function testing5(){
                    console.log("testing 5")

                    test((function testing6(){
                        console.log("testting 6")

                        test((function testing7(){
                            console.log("testing 7")

                            test((function testing8(){
                                console.log("testing 8")

                            }))
                        }))
                    }))
                }))
            }))
        }))
    }))
})

/*
issues
callback hell
ioc
readiblity issue
puyramid doom 





*/

/*

resolve callback issues 

1- promises  - vaada 
2- async await 


shop - chips- chips nahi h , yhi ruko leke aata hu 




*/