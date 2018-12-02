PROJ=timer
OUT=wasm_out
# Check if OS is windows
ifeq ($(OS), Windows_NT)
	RM=del
else
	RM=rm
endif

CFLAGS= -O3 --emrun -s WASM=1

# $@ is the .html, $^ is the .c
$(PROJ).html: $(PROJ).c
	emcc $(CFLAGS) -o ./$(OUT)/$@ $^ 

.PHONY: clean
clean:
	$(RM) .\$(OUT)\$(PROJ).html .\$(OUT)\$(PROJ).js .\$(OUT)\$(PROJ).wasm