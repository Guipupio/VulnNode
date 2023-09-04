import socket
import sys
import time

def is_port_open(host, port, timeout):
    start_time = time.time()
    while time.time() - start_time < timeout:
        try:
            with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
                sock.settimeout(1)  # Adjust the timeout for each attempt
                sock.connect((host, port))
            return True
        except (socket.timeout, ConnectionRefusedError):
            pass  # Continue attempting until the timeout is reached
    return False

def main():
    if len(sys.argv) != 4:
        print("Usage: python3 check_port.py <host> <port> <timeout>")
        sys.exit(1)

    host = sys.argv[1]
    port = int(sys.argv[2])
    timeout = float(sys.argv[3])

    if is_port_open(host, port, timeout):
        print(f"Port {port} on host {host} is open.")
        sys.exit(0)
    else:
        print(f"Port {port} on host {host} is not open after {timeout} seconds.")
        sys.exit(1)

if __name__ == "__main__":
    main()
